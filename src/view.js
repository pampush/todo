import {Utils, images} from './utils'

class View {
    constructor() {
    }
    /**
     * 
     * @param {*} param0 
     */
    renderTodo({id, title, desc, duedate, priority, projectid}) {
      
      let li = document.createElement('li'),
          input = document.createElement('input'),
          titleElem = document.createElement('div'),
          controls = document.createElement('div'),
          date = document.createElement('div'),
          dateCtrlContainer = document.createElement('div'),
          editButton = document.createElement('div'),
          delButton = document.createElement('div')

      li.classList.add(`${this.containerClass}__item`)
      li.dataset.id = id
      li.dataset.projectid = projectid
      input.setAttribute('type', 'checkbox')
      input.setAttribute('name', '')
      input.setAttribute('id', 'checkbox')
      titleElem.classList.add(`${this.containerClass}__item-title`)
      controls.classList.add(`${this.containerClass}__item-controls`)
      date.classList.add(`${this.containerClass}__item-date`)
      date.classList.add(`priority-${priority}`)
      dateCtrlContainer.classList.add(`${this.containerClass}__item-container`)
      editButton.classList.add(`${this.containerClass}__item-container__edit`)
      delButton.classList.add(`${this.containerClass}__item-container__del`)
      /** BUTTONS ! */
      editButton.append(Utils.createIcon({
        url: images.get('./edit.svg'), 
        alt: 'edit'
      }))
      delButton.append(Utils.createIcon({
        url: images.get('./delete.svg'), 
        alt: 'delete'
      }))

      controls.append(editButton, delButton)
      //renderDescription()
      titleElem.textContent = title
      date.textContent = duedate
      dateCtrlContainer.append(date, controls)
      li.append(input, titleElem, dateCtrlContainer)

      this.container.append(li)
    }
  /**
   * 
   * @param {*} param0 
   */
  renderProject({id, title, counter = 0}) {
    if(id == 'home') {
      this.renderHomeProject({id, title, counter})
      return
    }
    let li = document.createElement('li'),
        span = document.createElement('span'),
        delButton = document.createElement('div'),
        projectsCounter = document.createElement('div')

    li.classList.add(`${this.containerClass}__subitem`)
    li.dataset.id = id
    span.textContent = title
    delButton.classList.add(`${this.containerClass}__subitem__del`)
    projectsCounter.classList.add(`${this.containerClass}__subitem-counter`)
    projectsCounter.textContent = counter
    delButton.append(Utils.createIcon({
      url: images.get('./delete.svg'), 
      alt: 'delete'
    }))

    li.append(projectsCounter, span, delButton)
    this.container.append(li)
  }

  projectInc({projectid}) {
    const projectNode = document.querySelector(`[data-id="${projectid}"] .menu-container__subitem-counter`)
    projectNode.textContent = (+projectNode.textContent) + 1 
  }
  /**
   * 
   * @param {*} param0 
   */
  renderHomeProject({id, title, counter = 0}) {
    let container = document.querySelector('.menu-container__home'),
        li = document.createElement('li'),
        span = document.createElement('span'),
        projectsCounter = document.createElement('div')

    li.classList.add(`${this.containerClass}__subitem`)
    li.dataset.id = id
    span.textContent = title
    projectsCounter.classList.add(`${this.containerClass}__subitem-counter`)
    projectsCounter.textContent = counter

    li.append(projectsCounter, span)
    container.append(li)
  }
  /**
   * 
   * @param {*} todoid 
   */
  renderEdit(todoid, projectid) {
    const todo = document.querySelector(`[data-id="${todoid}"]`),
          editTodo = document.createElement('li')
    let nodesConfig = {input: ['title'],
                  div: ['date', 'controls', 'inputs', 'submit', 'description','cancel', 'priority'],
                }
    let nodes = {}
    for(let [key, item] of Object.entries(nodesConfig)) {
      for(let value of item)
        nodes[value] = document.createElement(`${key}`)
    }

    todo.style.display = 'none' 
    editTodo.classList.add(`${this.containerClass}__item`)
    editTodo.classList.add(`${this.containerClass}__item-edit`)
    editTodo.dataset.id = todoid
    nodes.title.type = 'text'
    nodes.title.placeholder = 'add title'
    nodes.title.required = 'true'
    nodes.controls.classList.add(`${this.containerClass}__item-edit__controls`)
    nodes.inputs.classList.add(`${this.containerClass}__item-edit__inputs`)
    
    nodes.date.classList.add(`${this.containerClass}__item-edit__inputs-date`)
    nodes.date.append(Utils.createIcon({
      url: images.get('./calendar.svg'), 
      alt: 'date'
    }))
    nodes.submit.classList.add(`${this.containerClass}__item-edit__inputs-add`)
    nodes.submit.append(Utils.createIcon({
      url: images.get('./add.svg'), 
      alt: 'submit',
    }))
    nodes.cancel.classList.add(`${this.containerClass}__item-edit__inputs-cancel`)
    nodes.cancel.append(Utils.createIcon({
      url: images.get('./cancel.svg'), 
      alt: 'cancel',
    }))
    nodes.priority.classList.add(`${this.containerClass}__item-edit__inputs-priority`)
    nodes.priority.append(Utils.createIcon({
      url: images.get('./flag.svg'), 
      alt: 'priority',
    }))
    nodes.description.classList.add(`${this.containerClass}__item-edit__inputs-description`)
    nodes.description.append(Utils.createIcon({
      url: images.get('./description.svg'), 
      alt: 'description'
    }))
    nodes.controls.append(nodes.submit, nodes.cancel)
    nodes.inputs.append(nodes.title, nodes.description, nodes.date, nodes.priority)
    editTodo.append(nodes.inputs, nodes.controls)
    todo.after(editTodo)
  }
  /**
   * 
   * @param {*} param0 
   */
  renderButton({button, classList}) {
    button.classList.add(`${this.containerClass}__${classList}`)
    this.buttonsContainer.append(button)
  }

  renderForm({form, classList}) {
    form.classList.add(`${classList}`)
    this.container.append(form)
  }

  delElem({id}) {
    document.querySelector(`[data-id="${id}"]`).remove()
  }

  findRoot(node) {  
    while (!node.dataset.id)
        node = node.parentNode;
    return node;
  }

  scrollDown() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight
  }

  fetchTodo(id) {
    const todo = document.querySelector(`[data-id="${id}"]`),
    title = todo.querySelector(`.todos-container__item-title`).textContent,
    date = todo.querySelector(`.todos-container__item-date`).textContent,
    priority = todo.querySelector(`todos-container__item-date`).contains('priority-0') ? 0 : 
    todo.querySelector(`todos-container__item-date`).contains('priority-1') ? 1 :
    todo.querySelector(`todos-container__item-date`).contains('priority-2') ? 2 : false

    return {
      title: title,
      date: date,
      priority: priority,
      description: description
    }
  }
}


/* or args (container, containerClass) in render functions? */ 
class UlTodo extends View {
  constructor() {
    super()
    this.container = this.buttonsContainer = document.querySelector('.todos-container')
    this.containerClass = 'todos-container' 
  }
}


class Aside extends View {
  constructor() {
    super()
    this.container = this.buttonsContainer = document.querySelector('.menu-container')
    this.containerClass = 'menu-container'
  }
}


class MainContent extends View {
  constructor() {
    super()
    this.container = this.buttonsContainer = document.querySelector('.main-content')
    this.containerClass = 'main-content'
  }
}

class Buttons {
  constructor() {
  }
  
  hide(button) {
    button.style.display = 'none'
  }
  
  view(button) {
    button.style.display = 'flex'
  }

  createButton({name, url, alt = '', textContent = '', type = 'button'}) {
    let div = document.createElement('div'),
        button = document.createElement('button') 
    button.type = type
    button.append(Utils.createIcon({
      url: images.get(url), 
      alt: alt
    }))
    div.textContent = textContent
    button.append(div)
    this[name] = button
  }
}

// class Inputs {
//   hideInput(input) {
//     input.style.display = 'none'
//   }

//   viewInput(input) {
//     input.style.display = 'block'
//   }

//   createInput({name, type = 'text', placeholder = '', required = false}) {
//     let input = document.createElement('input')
//     input.type = type
//     input.placeholder = placeholder
//     input.required = required
//   }

//   createOptionInput({name, options = ['low', 'medium', 'high']}) {
//     let select = document.createElement('select')
//     for(let item of options) {
//       let option = document.createElement('option')
//       option.textContent = item
//       select.append(option)
//     }
//     this[name] = select
//   }
// }

class UlProjects extends View{
  constructor() {
    super()
    this.container = document.querySelector('.menu-container__projects')
    this.containerClass = 'menu-container'
  }
}
export {View, UlTodo, Aside, Buttons, MainContent, UlProjects}