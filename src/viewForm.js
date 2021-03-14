import {Utils, images} from './utils'
import {Buttons} from './view' 

class FormHandler {
  constructor() {
    this.inputTitle = null
    this.inputDate = null
  }

    fetchTodoForm() {

    }

    fetchProjectForm() {
      
    }
  /**
   * 
   * @returns 
   */
  createTodoForm({name, options = ['low', 'medium', 'high']}) {
    this.inputTitle = document.createElement('input')
    this.inputDescription = document.createElement('input')  
    this.inputPriority = document.createElement('select')
    this.inputDate = document.createElement('input')
      
    this.inputTitle.type = 'text'
    this.inputTitle.placeholder = 'add title'
    this.inputTitle.required = 'true'
    this.inputDescription.type = 'text'
    this.inputDescription.placeholder ='add description'
    this.inputDate.type = 'date'
    this.inputDate.min = (new Date()).toISOString().slice(0, 10)
      
    for(let item of options) {
      let option = document.createElement('option')
      option.textContent = item
      this.inputPriority.append(option)
    }
    this.container.append(this.inputTitle, this.inputDescription, this.inputDate, this.inputPriority, this.buttonsContainer)   
    this[name] = this.container 
  }
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
      console.log(this.inputPriority.value);
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
          //projectForm = document.createElement('div'),
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
      aside.append(this.container)
    }

    hide() {
      this.container.style.display = 'none'
      this.container.reset()
    }
    view() {
      this.container.style.display = 'flex'
    }

    renderEditForm(id) {
      let elem = document.querySelector(`[data-id="${id}"]`)
      this.inputTitle.value = elem.querySelector('.todos-container__item-title').textContent
      this.inputDate.value = elem.querySelector('.todos-container__item-date').textContent
    }
  }

class TodoForm extends FormHandler {
  constructor() {
    super()
    this.container = document.createElement('form')
    this.container.classList.add('todo-form') 
    this.containerClass = 'todo-form'
    this.buttonsContainer = document.createElement('div')
    this.buttonsContainer.classList.add('todo-form__buttons-container')
    }
    
}

class ProjectForm extends FormHandler {
  constructor() {
    super()
    this.container = document.createElement('form')
    this.containerClass = 'project-form'
    this.buttonsContainer = document.createElement('div')
    this.buttonsContainer.classList.add('project-form__button-container')
  }
}
export  {FormHandler, TodoForm, ProjectForm}