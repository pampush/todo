import "normalize.css"
import "./style/style.sass"
import {User, Project, Todo} from './model'
import View from './view'
import FormHandler from './viewForm'
import eventEmitter from './eventEmitter'
import Utils from './utils'

class Controller {
  
}

class EventController {
    constructor(eventEmitter, view) {
        this.evt = eventEmitter; 
        this.view = view
        this.project = new Project()  
        this.todo = {}
        this.formHandler = new FormHandler()

        this.renderTodo = (data) => this.view.renderTodo(data)
        this.renderProject = (data) => this.view.renderProject(data)

        this.addTodoToModel = (data) => this.project.addTodo(data)
        // db func this.addProjectToModel = (data) => 
      }

    init() {
      document.addEventListener('DOMContentLoaded', (e) => {
        this.view.renderButtons()
      })

      
      this.evt.on('addTodoForm', () => this.formHandler.closeTodoFormButton.addEventListener('click', (e) => {   
        this.view.viewAddButton()
        this.formHandler.hideForm()
      }))

      this.evt.on('addTodoForm', () => this.formHandler.addTodoFormButton.addEventListener('click', () => {
        this.evt.emit('addTodo', {title: 'added'});
      }))
      this.evt.on('addTodo', this.addTodoToModel)
      this.evt.on('addTodo', this.renderTodo)
      this.evt.on('addTodo', () =>console.log(this.project))

      // db func this.evt.on('addProject', this.addProjectToModel)
      this.evt.on('addProject', this.renderProject)

      this.evt.emit('addTodo', {title: 'first'})

      this.view.addTodoFormButton.addEventListener('click', (e) => {
        this.view.hideAddButton()
        this.formHandler.renderTodoForm()
        this.evt.emit('addTodoForm', '')//{id: 1, title: 'added'})
      })
      
      this.view.addProjectButton.addEventListener('click', (e) => {
        this.evt.emit('addProject', {title: 'sport'})
      })
    }
}

class ViewController {

}

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