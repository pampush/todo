import 'normalize.css';
import './style/style.sass';
import uniqid from 'uniqid';
import { Utils, images } from './utils';
import { User, Project, Todo } from './model';
import { View, UlTodo, Aside, Buttons, MainContent, UlProjects, EditForm } from './view';
import { FormHandler, TodoForm, ProjectForm } from './viewForm';
import eventEmitter from './eventEmitter';
import Db from './fbProcessor';

// class App {
//   init() {
//     new EventController
//      init
//   }
// }

class EventController {
  constructor(view) {
    this.evt = eventEmitter;
    this.view = view;
    this.project = new Project();
    this.user = new User();
    this.db = new Db();
    this.ultodo = new UlTodo();
    this.aside = new Aside();
    this.buttons = new Buttons();
    this.ulproject = new UlProjects();
    this.maincontent = new MainContent();
    this.todoform = new TodoForm('main-content');
    this.projectform = new ProjectForm('menu-container');

    this.renderTodo = (data) => this.ultodo.renderTodo(data);
    this.renderProject = (data) => this.ulproject.renderProject(data);
    this.addTodoToModel = (data) => this.project.addTodo(data);
    this.dbAddTodo = (data) => this.db.addTodo(data);
    this.dbAddProject = (data) => this.db.addProject(data);
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initToday();
      this.buttonsInit();
      this.todoform.createTodoForm();
      this.projectform.renderProjectForm();
      this.formListenersInit();
    });

    this.db.getProjects((data) => this.renderProject(data));
    this.addToDoForm();
    this.addProjectForm();
    this.addTodo();
    this.addProject();
    this.delTodo();
    this.editInitListeners();
    //
    this.ultodo.container.addEventListener('click', (e) => {
      const id = this.view.findRoot(e.target).dataset.id;
      const projectid = this.view.findRoot(e.target).dataset.projectid;
      if (e.target.classList.contains('todos-container__item-title'))
        this.ultodo.descriptionToggle(id);
      else if (e.target.classList.contains('todos-container__item-container__edit')) {
        const edit = new EditForm(id);
        edit.renderEdit();
        this.evt.emit('editInitListeners', edit);
      } else if (e.target.classList.contains('todos-container__item-container__del')) {
        const data = { id, projectid };
        this.evt.emit('delTodo', data);
      }
    });

    this.aside.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('menu-container__subitem-today')) {
        this.ultodo.container.innerHTML = '';
        this.user.currentProject = 'home';
        this.initToday();
      } else if (e.target.classList.contains('menu-container__subitem')) {
        const targetid = this.view.findRoot(e.target).dataset.id;
        this.ultodo.container.innerHTML = '';
        this.user.currentProject = targetid;
        this.db.queryProject(this.renderTodo, targetid);
      } else if (e.target.classList.contains('menu-container__subitem__del')) {
        const projectid = this.view.findRoot(e.target).dataset.id;
        this.db.deleteProject(projectid);
        this.view.delElem({ id: projectid });
      }
    });

    const sideToggler = document.querySelector('.header__side-toggler');
    sideToggler.append(
      Utils.createIcon({
        url: images.get('./menu.svg'),
        alt: 'menu',
      }),
    );
    const menuModal = document.querySelector('.menu__modal');
    sideToggler.addEventListener('click', (e) => {
      this.aside.container.classList.toggle('opened');
      menuModal.classList.toggle('opened');
    });
  }

  buttonsInit() {
    this.buttons.createButton({
      name: 'addTodoFormButton',
      url: './add.svg',
      alt: 'view todo form',
      textContent: 'Add task',
    });
    this.maincontent.renderButton({
      button: this.buttons.addTodoFormButton,
      classList: 'add-button',
    });
    this.buttons.addTodoFormButton.addEventListener('click', () => {
      this.evt.emit('addTodoForm', '');
    });

    this.buttons.createButton({
      name: 'addProjectFormButton',
      url: './add.svg',
      alt: 'view project form',
      textContent: 'Add project',
    });
    this.aside.renderButton({ button: this.buttons.addProjectFormButton, classList: 'add-button' });
    this.buttons.addProjectFormButton.addEventListener('click', () => {
      this.evt.emit('addProjectForm', '');
    });
  }

  addToDoForm() {
    this.evt.on('addTodoForm', () => this.buttons.hide(this.buttons.addTodoFormButton));
    this.evt.on('addTodoForm', () => this.todoform.view());
    this.evt.on('addTodoForm', () => this.view.scrollDown());
  }

  addProjectForm() {
    this.evt.on('addProjectForm', () => this.buttons.hide(this.buttons.addProjectFormButton));
    this.evt.on('addProjectForm', () => this.projectform.view());
  }

  addTodo() {
    this.evt.on('addTodo', this.addTodoToModel);
    this.evt.on('addTodo', this.renderTodo);
    this.evt.on('addTodo', (data) => this.dbAddTodo(data));
    this.evt.on('addTodo', () => this.ultodo.scrollDown());
    this.evt.on('addTodo', this.view.projectInc);
  }

  addProject() {
    this.evt.on('addProject', this.renderProject);
    this.evt.on('addProject', (data) => this.dbAddProject(data));
    this.evt.on('addProject', (data) => (this.user.currentProject = data.id));
  }

  initToday() {
    this.db.queryToday1((data) => this.renderTodo(data));
  }

  delTodo() {
    this.evt.on('delTodo', (data) => this.view.delElem(data));
    this.evt.on('delTodo', (data) => this.view.projectDec(data));
    this.evt.on('delTodo', (data) => this.db.deleteTodo(data));
  }

  formListenersInit() {
    this.todoform.container.addEventListener('submit', (e) => {
      e.preventDefault();
      let data = this.todoform.fetchForm();
      data.id = uniqid.time();
      data.projectid = this.user.currentProject;
      this.evt.on('addTodo', () => this.todoform.hide());
      this.evt.on('addTodo', () => this.buttons.view(this.buttons.addTodoFormButton));
      this.evt.emit('addTodo', data);
    });
    this.todoform.closeButton.addEventListener('click', () => {
      this.todoform.displayToggle();
      this.buttons.view(this.buttons.addTodoFormButton);
    });

    this.projectform.container.addEventListener('submit', (e) => {
      e.preventDefault();
      this.buttons.view(this.buttons.addProjectFormButton);
      let data = this.projectform.fetchProjectForm();
      data.id = uniqid.time();
      this.evt.emit('addProject', data);
      this.projectform.hide();
    });
    this.projectform.closeProjectButton.addEventListener('click', () => {
      this.projectform.hide();
      this.buttons.view(this.buttons.addProjectFormButton);
    });
  }

  editInitListeners() {
    this.evt.on('editInitListeners', (edit) => {
      edit.buttons.cancel.addEventListener('click', (e) => {
        edit.removeEdit();
      });

      edit.buttons.submit.addEventListener('click', (e) => {
        const data = edit.fetchForm();
        this.db.updateTodo(data);
        this.view.updateTodo(data);
        edit.removeEdit();
      });

      edit.buttons.description.addEventListener('click', (e) => {
        edit.toggleDescription();
      });

      edit.buttons.priority.addEventListener('click', (e) => {
        edit.togglePriority();
      });

      edit.buttons.date.addEventListener('click', (e) => {
        edit.toggleDate();
        if (edit.calendar) {
          edit.calendar.buttons.prev.addEventListener('click', (e) => {
            edit.calendar.monthShift('prev');
            edit.calendar.renderDatePicker('prev');
            edit.calendar.renderDateHeader();
            edit.calendar.datelist.addEventListener('click', (e) => {
              if (e.target.classList.contains('date-picker__date-list__cell'))
                edit.calendar.selectDay(e.target);
              edit.toggleDate();
            });
          });

          edit.calendar.buttons.next.addEventListener('click', (e) => {
            edit.calendar.monthShift('next');
            edit.calendar.renderDatePicker('next');
            edit.calendar.renderDateHeader();
            edit.calendar.datelist.addEventListener('click', (e) => {
              if (e.target.classList.contains('date-picker__date-list__cell'))
                edit.calendar.selectDay(e.target);
              edit.toggleDate();
            });
          });
          edit.calendar.datelist.addEventListener('click', (e) => {
            if (e.target.classList.contains('date-picker__date-list__cell'))
              edit.calendar.selectDay(e.target);
            edit.toggleDate();
          });
        }
      });
    });
  }
}

// class ButtonsController extends Controller{

// }

// class ModelController {

// }

const app = new EventController(new View());
app.init();
