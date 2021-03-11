import "normalize.css"
import "./style.sass"
import {User, Project, Todo} from './model'
import View from './view'
import eventEmitter from './eventEmitter'


class Controller {
  
}

class EventController {
    constructor(eventEmitter, view) {
        this.evt = eventEmitter; 
        this.view = view
        this.project = new Project()  
        this.todo = {}

        this.render = (data) => this.view.renderTodo(data)
        this.addTodoToModel = (data) => this.project.addTodo(data)
    }

    init() {
      this.evt.on('addTodo', this.addTodoToModel)
      this.evt.on('addTodo', this.render)
      this.evt.on('addTodo', ()=>console.log(this.project))


      this.view.addButton.addEventListener('click', (e) => {
        this.evt.emit('addTodo', {id: 1, title: 'added'})
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