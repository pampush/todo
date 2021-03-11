
import {Utils, images} from './utils'

class View {
    constructor() {
      this.todoContainer = document.querySelector('.todos-container')
      this.addTodoFormButton = document.querySelector('.todos-container__add-button')
      
      this.menuContainer = document.querySelector('.menu-container__projects')
      this.addProjectButton = document.querySelector('.menu-container__add-button')
      
      this.buttons = [{button: this.addProjectButton, alt: 'add project', url: images.get('./add.svg'), textContent: 'Add project'},
      { button: this.addTodoFormButton, alt: 'addTodo', url: images.get('./add.svg'), textContent: 'Add task'}]
    }
    /**
     * 
     * @param {*} param0 
     */
    renderTodo({title}) {
      let li = document.createElement('li'),
          input = document.createElement('input'),
          desc = document.createElement('div'),
          controls = document.createElement('div')

      li.classList.add('todos-container__item')
      input.setAttribute('type', 'checkbox')
      input.setAttribute('name', '')
      input.setAttribute('id', 'checkbox')
      desc.classList.add('todos-container__item-title')
      controls.classList.add('todos-container__item-controls')
      
      controls.append(Utils.createIcon({
        url: images.get('./edit.svg'), 
        alt: 'edit', 
        className: 'todos-container__item-controls-edit' 
      }))
      controls.append(Utils.createIcon({
        url: images.get('./delete.svg'), 
        alt: 'delete', 
        className: 'todos-container__item-controls-delete' 
      }))

      
      desc.textContent = title
      li.append(input, desc, controls)

      this.todoContainer.append(li)
    }
  /**
   * 
   * @param {*} param0 
   */
  renderProject({title}) {
    let li = document.createElement('li'),
        span = document.createElement('span')

    li.classList.add('menu-container__subitem')
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
    //  li.textContent = title
    this.menuContainer.append(li)
  }
  /**
   * 
   */
  renderButtons() {
    for(let item of this.buttons) {
      let div = document.createElement('div')  
      item.button.append(Utils.createIcon({
        url: item.url, 
        alt: item.alt
      }))
      div.textContent = item.textContent
      item.button.append(div)
    }
  }
  /**
   * 
   */
  hideAddButton() {
    this.addTodoFormButton.style.display = 'none'
  }
  viewAddButton() {
    this.addTodoFormButton.style.display = 'flex'
  }
}

export default View