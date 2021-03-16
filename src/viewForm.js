import { add } from 'date-fns'
import {Utils, images} from './utils'

class FormHandler {
  constructor(parent) {
    this.parent = document.querySelector(`.${parent}`) 
  }
  /**
   * 
   * @returns 
   */
  createTodoForm({options = ['low', 'medium', 'high']} = {}) {
    this.inputTitle = document.createElement('input')
    this.inputDescription = document.createElement('textarea')  
    this.inputPriority = document.createElement('select')
    this.inputDate = document.createElement('input') 
    
    const inputsContainer = document.createElement('div')
    const buttonsContainer = document.createElement('div')

    inputsContainer.classList.add(`${this.containerClass}__inputs-container`)
    buttonsContainer.classList.add(`${this.containerClass}__buttons-container`)
    
    this.addButton = this.initButton({
      url:images.get('./add.svg'), 
      alt:'add todo', 
      textContent: '', 
      classList: 'todo-form__add-button',
      type: 'submit'
    })

    this.closeButton = this.initButton({
      url:images.get('./cancel.svg'), 
      alt:'close form', 
      textContent: '', 
      classList: 'todo-form__close-button',
      type: 'button'
    })

    this.inputTitle.type = 'text'
    this.inputTitle.placeholder = 'add title'
    this.inputTitle.required = 'true'
    this.inputDescription.placeholder ='add description'
    this.inputDate.type = 'date'
    this.inputDate.min = (new Date()).toISOString().slice(0, 10)
      
    for(let item of options) {
      let option = document.createElement('option')
      option.textContent = item
      this.inputPriority.append(option)
    }

    buttonsContainer.append(this.addButton, this.closeButton)
    inputsContainer.append(this.inputDate, this.inputPriority)
    this.container.append(this.inputTitle, this.inputDescription, inputsContainer, buttonsContainer)   
    this.container.style.display = 'none'
    
    this.parent.append(this.container)
  }
  /**
   * 
   * @param {*} param0 
   * @returns 
   */

  /**
   * 
   * @param {*} param0 
   * @returns 
   */
  initButton({url, alt, textContent, classList, type = 'button'}) { 
    let closeButton = document.createElement('button'),
        textElem = document.createElement('div')
        textElem.textContent = textContent
    closeButton.classList.add(classList)
    closeButton.type = type
    closeButton.append(Utils.createIcon({
      url: url, 
      alt: alt
    }), textElem)

    return closeButton
  }
/**
 * TODO: TRY MIXIN TO INHERIT THIS METHOD FROM VIEW CLASS
 * @param {*} param0 
 */
    renderButton({button, classList}) {
      button.classList.add(`${this.containerClass}__${classList}`)
      this.buttonsContainer.append(button)
    }


    renderInputs(inputs) {
      for(let input of inputs)
        this.container.append(input)
    }
    /**
     * 
     * @returns 
     */
    fetchForm() {
      return { 
        title: this.inputTitle.value,
        duedate: this.inputDate.value,
        priority: this.inputPriority.selectedIndex,
        description: this.inputDescription.value
      }
    }

    fetchProjectForm() {
      return {
        title: this.projectInput.value
      }
    }
    /**
     * 
     */
    renderProjectForm() {
      let aside = document.querySelector('.menu-container'),
          buttonsContainer = document.createElement('div')

          this.projectInput = document.createElement('input');
          this.container.classList.add('project-form')
          buttonsContainer.classList.add('project-form__buttons-container')
          this.projectInput.type = 'text'
          this.projectInput.name = 'projecttitle'
          this.projectInput.id = 'projecttitle'
          this.projectInput.required = 'true'
          this.projectInput.placeholder = 'add project'
          this.projectInput.autocomplete = 'off'

      this.addProjectButton = this.initButton({
        url:images.get('./add.svg'), 
        alt:'add project', 
        textContent: '', 
        classList: 'project-form__add-button',
        type: 'submit'
      })
      this.closeProjectButton = this.initButton({
        url:images.get('./cancel.svg'), 
        alt:'close project', 
        textContent: '', 
        classList: 'project-form__close-button'
      })
      
      buttonsContainer.append(this.addProjectButton, this.closeProjectButton)
      this.container.append(this.projectInput, buttonsContainer)
      this.container.style.display = 'none'

      aside.append(this.container)
    }

    hide() {
      this.container.style.display = 'none'
      this.container.reset()
    }
    view() {
      this.container.style.display = 'flex'
    }
  
    displayToggle() {
      this.container.style.display = (this.container.style.display == 'none') ? 'flex' : 'none'
    }
  }

class TodoForm extends FormHandler {
  constructor(parent) {
    super(parent)
    this.container = document.createElement('form')
    this.container.classList.add('todo-form') 
    this.containerClass = 'todo-form'
    this.buttonsContainer = document.createElement('div')
    this.buttonsContainer.classList.add('todo-form__buttons-container')
    }
    
}

class ProjectForm extends FormHandler {
  constructor(parent) {
    super(parent)
    this.container = document.createElement('form')
    this.containerClass = 'project-form'
    this.buttonsContainer = document.createElement('div')
    this.buttonsContainer.classList.add('project-form__button-container')
  }
}
export  {FormHandler, TodoForm, ProjectForm}