import "normalize.css"
import "./style/style.sass"
import {User, Project, Todo} from './model'
import {View, UlTodo, Aside, Buttons, MainContent, Inputs, UlProjects} from './view'
import {FormHandler, TodoForm, ProjectForm} from './viewForm'
import eventEmitter from './eventEmitter'
import Utils from './utils'
import uniqid from 'uniqid'
import { isThisQuarter, isThisSecond } from "date-fns"
import Db from './fbProcessor'

// class App { 
//   init() {
//     new EventController
//      init
//   }
// }

class EventController {
    constructor(eventEmitter, view) {
        this.evt = eventEmitter 
        this.view = view
        this.project = new Project() 
        this.user = new User() 
        this.todo = {}
        this.db = new Db()
        this.ultodo = new UlTodo()
        this.aside = new Aside()
        this.buttons = new Buttons()
        this.inputs = new Inputs()
        this.ulproject = new UlProjects()
        this.maincontent = new MainContent()
        this.todoform = new TodoForm()
        this.projectform = new ProjectForm()
        
        this.renderTodo = (data) => this.ultodo.renderTodo(data)
        this.renderProject = (data) => this.ulproject.renderProject(data)
        this.addTodoToModel = (data) => this.project.addTodo(data)
        this.dbAddTodo = (data) => this.db.addTodo(data) 
        this.dbAddProject = (data) => this.db.addProject(data)
      }

    init() {
      document.addEventListener('DOMContentLoaded', (e) => {
        this.buttons.createButton({name: 'addTodoFormButton', 
          url: './add.svg', 
          alt: 'view todo form', 
          textContent: 'Add task',
        })
        this.maincontent.renderButton({button: this.buttons.addTodoFormButton, classList: 'add-button'})
         
        this.buttons.createButton({name: 'addProjectFormButton', 
          url: './add.svg', 
          alt: 'view project form', 
          textContent: 'Add project'
        })
        this.aside.renderButton({button: this.buttons.addProjectFormButton, classList: 'add-button'})

        this.evt.emit('buttonsInit', '')
        this.initToday()
      })

      this.db.getProjects((data) => this.renderProject(data))
      this.addToDoForm()
      this.addProjectForm()
      this.addEditForm()
      this.addTodo()
      this.delTodo()


      this.evt.on('addProject', this.renderProject)
      this.evt.on('addProject', (data) => this.dbAddProject(data))
      this.evt.on('addProject', (data) => this.user.currentProject = data.id)
      //
      this.evt.on('buttonsInit', () => {
        this.buttons.addTodoFormButton.addEventListener('click', () => {
          this.evt.emit('addTodoForm', '')
        })
        this.buttons.addProjectFormButton.addEventListener('click', () => 
        {
          this.buttons.hide(this.buttons.addProjectFormButton)
          //this.projectform.renderProjectForm()
          this.evt.emit('addProjectForm', '')
        })
      })
      //
      this.ultodo.container.addEventListener('click', e => {
        if(e.target.classList.contains('todos-container__item-container__edit')) {
          this.evt.emit('addTodoForm', '')
          this.evt.emit('addEditForm', this.view.findRoot(e.target).dataset.id)
        }
        if(e.target.classList.contains('todos-container__item-container__del'))
          this.evt.emit('delTodo', this.view.findRoot(e.target).dataset.id);
        })

        this.aside.container.addEventListener('click', e => {
          if(e.target.classList.contains('menu-container__subitem-today')) {
            this.ultodo.container.innerHTML = ''
            this.user.currentProject = 'home'
            this.initToday()
          } else
          if(e.target.classList.contains('menu-container__subitem')) {
            const targetId = this.view.findRoot(e.target).dataset.id  
            this.ultodo.container.innerHTML = ''
            this.user.currentProject = targetId
            this.db.queryProject(this.renderTodo, targetId);
          } 
        })
    }

    addToDoForm() {
      this.evt.on('addTodoForm', () => this.buttons.hide(this.buttons.addTodoFormButton))
      this.evt.on('addTodoForm', () => this.todoform.createTodoForm({name: 'todoForm'}), {once: true})
      this.evt.on('addTodoForm', () => {
        this.buttons.createButton({name: 'closeTodoButton', 
          url: './cancel.svg',
          textContent:'Close', 
          alt: 'close form', 
        })
        this.buttons.createButton({name: 'addTodoButton', 
          url: './add.svg',
          textContent:'Add', 
          alt: 'add todo', 
          type: 'submit'
        })
        this.todoform.renderButton({button: this.buttons.addTodoButton, classList: 'add-button'})
        this.todoform.renderButton({button: this.buttons.closeTodoButton, classList: 'close-button'})
      }, {once:true})
      this.evt.on('addTodoForm', () => this.todoform.view())
      this.evt.on('addTodoForm', () => this.maincontent.renderForm({form: this.todoform.todoForm, classList: 'todo-form'}))
      this.evt.on('addTodoForm', () => { 
        this.todoform.container.addEventListener('submit', (e) => {
          e.preventDefault()
          let data = this.todoform.fetchForm()
          data.id = uniqid.time()
          data.projectId = this.user.currentProject
          this.evt.on('addTodo', () => this.todoform.hide())
          this.evt.on('addTodo', () => this.buttons.view(this.buttons.addTodoFormButton))
          this.evt.emit('addTodo', data);
          this.evt.emit('projectInc', this.user.currentProject)
        })
        this.buttons.closeTodoButton.addEventListener('click', () => {
          this.todoform.hide()
          this.buttons.view(this.buttons.addTodoFormButton)
        })
      }, {once: true})
    }

    addProjectForm() {
      this.evt.on('addProjectForm', () => this.projectform.renderProjectForm(), {once: true})
      this.evt.on('addProjectForm', () => this.projectform.view())
      this.evt.on('addProjectForm', () => { 
        this.projectform.container.addEventListener('submit', (e) => {
          e.preventDefault()
          this.buttons.view(this.buttons.addProjectFormButton)
          let data = this.projectform.fetchProjectForm()
          data.id = uniqid.time()
          this.evt.emit('addProject', data)
          this.projectform.hide()
          })
        this.projectform.closeProjectButton.addEventListener('click', () => {
          this.projectform.hide()
          this.buttons.view(this.buttons.addProjectFormButton)
        })
      }, {once: true})
    }

    addEditForm() {
      this.evt.on('addEditForm', (id) => this.todoform.renderEditForm(id))
    }

    addTodo() {
      this.evt.on('addTodo', this.addTodoToModel)
      this.evt.on('addTodo', this.renderTodo)
      this.evt.on('addTodo',  (data) => this.dbAddTodo(data))
      this.evt.on('projectInc', this.view.projectInc)
    }

    initToday() {
      this.db.queryToday1((data) => this.renderTodo(data))
    }

    delTodo() {
      this.evt.on('delTodo', (id) => this.view.delElem(id))  
    }
}

// class ButtonsController extends Controller{

// }
class ModelController {

}

const app = new EventController(eventEmitter, new View())
app.init()