import uniqid from 'uniqid'

class todoList {
  constructor() {
    
  }
}

class User {
  constructor({id, name, email} = {}) {
    this.id = id
    this.name = name
    this.email = email
    this.currentProject
  }
}

class Todo {
  constructor({id = uniqid.time(), title, description = '', dueDate, priority} = {}) {
    this.id = id
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }
}

class Project {
  constructor({id = uniqid.time(), name = 'today', counter = 0} = {}) {
    this.id = id
    this.name = name
    this.todos = []
    this.counter = counter
  }

  addTodo(todo) {
    this.todos.push(new Todo(todo))
  }
}

// for demo
class NullUser {
  constructor() {
    this.id = -1
    this.title = 'Guest'
  }
}

export {User, Project, Todo}