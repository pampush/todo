import FormHandler from './viewForm'
import {Utils, images} from './utils'

class View {
    constructor() {
      //this.menuContainer = document.querySelector('.menu-container__projects')
      
    }
    /**
     * 
     * @param {*} param0 
     */
    renderTodo({id, title, desc, dueDate, priority}) {
      
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
      input.setAttribute('type', 'checkbox')
      input.setAttribute('name', '')
      input.setAttribute('id', 'checkbox')
      titleElem.classList.add(`${this.containerClass}__item-title`)
      controls.classList.add(`${this.containerClass}__item-controls`)
      date.classList.add(`${this.containerClass}__item-date`)
      date.classList.add(`${priority}-priority`)
      dateCtrlContainer.classList.add(`${this.containerClass}__item-container`)
      editButton.classList.add(`${this.containerClass}__item-container__edit`)
      delButton.classList.add(`${this.containerClass}__item-container__del`)
      /** BUTTONS ! */
      editButton.append(Utils.createIcon({
        url: images.get('./edit.svg'), 
        alt: 'edit', 
        className: `${this.containerClass}__item-controls-edit` 
      }))
      delButton.append(Utils.createIcon({
        url: images.get('./delete.svg'), 
        alt: 'delete', 
        className: `${this.containerClass}__item-controls-delete` 
      }))

      controls.append(editButton, delButton)
      //renderDescription()
      titleElem.textContent = title
      date.textContent = dueDate
      dateCtrlContainer.append(date, controls)
      li.append(input, titleElem, dateCtrlContainer)

      this.container.append(li)
    }
  /**
   * 
   * @param {*} param0 
   */
  renderProject({title}) {
    let li = document.createElement('li'),
        span = document.createElement('span')

    li.classList.add(`${this.containerClass}__subitem`)
    span.textContent = title

    li.append(Utils.createIcon({
      url: images.get('./delete.svg'), 
      alt: 'delete'
    }))

    li.append(span)

    li.append(Utils.createIcon({
      url: images.get('./delete.svg'), 
      alt: 'delete'
    }))
    
    this.container.append(li)
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

  delElem(id) {
    document.querySelector(`[data-id="${id}"]`).remove()
  }

  findRoot(node) {  
    while (!node.dataset.id)
        node = node.parentNode;
    return node;
  }
  // hideAddButton() {
  //   this.addTodoFormButton.style.display = 'none'
  // }
  // /**
  //  * 
  //  */
  // viewAddButton() {
  //   this.addTodoFormButton.style.display = 'flex'
  // }
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

  createButton({name, url, alt = '', textContent = ''}) {
    let div = document.createElement('div'),
        button = document.createElement('div') 
    button.append(Utils.createIcon({
      url: images.get(url), 
      alt: alt
    }))
    div.textContent = textContent
    button.append(div)
    this[name] = button  
  }
}

class Inputs {
  hideInput(input) {
    input.style.display = 'none'
  }

  viewInput(input) {
    input.style.display = 'block'
  }

  createInput({name, type = 'text', placeholder = '', required = false}) {
    let input = document.createElement('input')
    input.type = type
    input.placeholder = placeholder
    input.required = required
    this[name] = input
  }

  createOptionInput({name, options = ['low', 'medium', 'high']}) {
    let select = document.createElement('select')
    for(let item of options) {
      let option = document.createElement('option')
      option.textContent = item
      select.append(option)
    }
    this[name] = select
  }
}

class UlProjects extends View{
  constructor() {
    super()
    this.container = document.querySelector('.menu-container__projects')
    this.containerClass = 'menu-container'
  }
}
export {View, UlTodo, Aside, Buttons, MainContent, Inputs, UlProjects}