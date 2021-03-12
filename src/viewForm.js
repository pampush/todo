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
    let inputDescription = document.createElement('input'),
        inputPriority = document.createElement('select')
    
    this.inputTitle = document.createElement('input');
    this.inputDate = document.createElement('input');
      
    this.inputTitle.type = 'text'
    this.inputTitle.placeholder = 'add title'
    this.inputTitle.required = 'true'
    inputDescription.type = 'text'
    inputDescription.placeholder ='add description'
    this.inputDate.type = 'date'
      
    for(let item of options) {
      let option = document.createElement('option')
      option.textContent = item
      inputPriority.append(option)
    }
    this.container.append(this.inputTitle, inputDescription, this.inputDate, inputPriority, this.buttonsContainer)   
    this[name] = this.container 
  }
  /**
   * 
   * @param {*} param0 
   * @returns 
   */
  initButton({url, alt, textContent, classList}) { 
    let closeButton = document.createElement('div'),
        textElem = document.createElement('div')
        textElem.textContent = textContent
    closeButton.classList.add(classList)
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
        dueDate: this.inputDate.value
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
          this.projectInput.placeholder = 'add project'
        

      this.addProjectButton = this.initButton({
        url:images.get('./add.svg'), 
        alt:'add project', 
        textContent: '', 
        classList: 'project-form__add-button'
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
      console.log(this);
      this.container.style.display = 'none'
    }
    view() {
      this.container.style.display = 'flex'
    }
  }

class TodoForm extends FormHandler {
  constructor() {
    super()
    this.container = document.createElement('div')
    this.container.classList.add('todo-form') 
    this.containerClass = 'todo-form'
    this.buttonsContainer = document.createElement('div')
    this.buttonsContainer.classList.add('todo-form__buttons-container')
    }
    
}

class ProjectForm extends FormHandler {
  constructor() {
    super()
    this.container = document.createElement('div')
    this.containerClass = 'project-form'
    this.buttonsContainer = document.createElement('div')
    this.buttonsContainer.classList.add('project-form__button-container')
  }
}
export  {FormHandler, TodoForm, ProjectForm}