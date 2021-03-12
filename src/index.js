import "normalize.css"
import "./style/style.sass"
import {User, Project, Todo} from './model'
import {View, UlTodo, Aside, Buttons, MainContent, Inputs, UlProjects} from './view'
import {FormHandler, TodoForm, ProjectForm} from './viewForm'
import eventEmitter from './eventEmitter'
import Utils from './utils'
import uniqid from 'uniqid'
import { isThisSecond } from "date-fns"

// class App {
//   init() {
//     new EventController
//      init
//   }
// }

class EventController {
    constructor(eventEmitter, view) {
        this.evt = eventEmitter; 
        this.view = view
        this.project = new Project()  
        this.todo = {}
        //this.formHandler = new FormHandler()
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
        // db func this.addProjectToModel = (data) => 
      }

    init() {
      document.addEventListener('DOMContentLoaded', (e) => {
        this.buttons.createButton({name: 'addTodoFormButton', 
          url: './add.svg', 
          alt: 'view todo form', 
          textContent: 'Add task'
        })
        this.ultodo.renderButton({button: this.buttons.addTodoFormButton, classList: 'add-button'})
         
        this.buttons.createButton({name: 'addProjectFormButton', 
          url: './add.svg', 
          alt: 'view project form', 
          textContent: 'Add project'
        })
        this.aside.renderButton({button: this.buttons.addProjectFormButton, classList: 'add-button'})

        this.evt.emit('buttonsInit', '');
      })

      /**
       * Add evt listeners on form once
       */
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
        })
        this.todoform.renderButton({button: this.buttons.addTodoButton, classList: 'add-button'})
        this.todoform.renderButton({button: this.buttons.closeTodoButton, classList: 'close-button'})
      }, {once:true})
      this.evt.on('addTodoForm', () => this.todoform.view())
      this.evt.on('addTodoForm', () => this.maincontent.renderForm({form: this.todoform.todoForm, classList: 'todo-form'}))
      this.evt.on('addTodoForm', () => { 
        this.buttons.addTodoButton.addEventListener('click', () => {
          let data = this.todoform.fetchForm()
          data.id = uniqid.time()
          console.log(data);
          this.evt.emit('addTodo', data);
        })
        this.buttons.closeTodoButton.addEventListener('click', () => {
          this.todoform.hide()
          this.buttons.view(this.buttons.addTodoFormButton)
        })
      }, {once: true})
      /**
       * addTodo
       */
      this.evt.on('addTodo', this.addTodoToModel)
      this.evt.on('addTodo', this.renderTodo)
      this.evt.on('addTodo', () => console.log(this.project))

      // db func this.evt.on('addProject', this.addProjectToModel)
      this.evt.on('addProjectForm', () => this.projectform.renderProjectForm(), {once: true})
      this.evt.on('addProjectForm', () => this.projectform.view())
      this.evt.on('addProjectForm', () => { 
        this.projectform.addProjectButton.addEventListener('click', (e) => {
          this.evt.emit('addProject', this.projectform.fetchProjectForm())
          })
        this.projectform.closeProjectButton.addEventListener('click', () => {
          this.projectform.hide()
          this.buttons.view(this.buttons.addProjectFormButton)
        })
        }, {once: true})
      // 
      this.evt.on('addProject', this.renderProject)
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
      
      this.evt.emit('addTodo', {title: 'first'})

      
      
    }
}

// class ButtonsController extends Controller{

// }

class ModelController {

}

//mediator for Firebase API
// class DBHandler {
//     dbConnection()
//     dbRead()
//     dbUpdate()
//     dbDelete()
// }

const app = new EventController(eventEmitter, new View())
app.init()