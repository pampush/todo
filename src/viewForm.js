import {Utils, images} from './utils'

class FormHandler {
    constructor() {
      this.todoForm = null
      this.mainContainer = document.querySelector('.main-content')
      this.menuContainer = document.querySelector('.menu-container__projects')
      this.closeTodoFormButton = null
      this.addTodoFormButton = null
    }
  
    fetchTodoForm() {
  
    }
  
    fetchprojectForm() {
  
    }
  
    renderTodoForm() {
      if(this.todoForm) {
        this.todoForm.style.display = 'flex'
        return 
      }
      let formContainer = document.createElement('div'),
          buttonsContainer = document.createElement('div'),
          inputTitle = document.createElement('input'),
          inputDescription = document.createElement('input'),
          inputDate = document.createElement('input'),
          inputPriority = document.createElement('select'),
          submitButton = document.createElement('button'),
          options = ['low', 'medium', 'high'];
          this.closeTodoFormButton = this.initButton({url:images.get('./cancel.svg'),textContent:'Close', alt: 'close form', classList: 'todo-form__close-button'})
          this.addTodoFormButton = this.initButton({url:images.get('./add.svg'), alt:'add todo', textContent: 'Add', classList: 'todo-form__add-button'})
          
          
          formContainer.classList.add('todo-form')
          buttonsContainer.classList.add('todo-form__buttons-container')
          inputTitle.type = 'text'
          inputTitle.placeholder = 'add title'
          inputTitle.required = 'true'
          inputDescription.type = 'text'
          inputDescription.placeholder ='add description'
          inputDate.type = 'date'
          
          
          submitButton.append(Utils.createIcon({
            url: images.get('./add.svg'), 
            alt: 'addTodo'
          }))
          
          for(let item of options) {
            let option = document.createElement('option')
            option.textContent = item
            inputPriority.append(option)
          }
          
          buttonsContainer.append(this.addTodoFormButton, this.closeTodoFormButton)
          formContainer.append(inputTitle, inputDescription, inputDate, inputPriority, buttonsContainer)
          this.todoForm = formContainer
          this.mainContainer.append(formContainer)
    }
  
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


  
    hideForm() {
      this.todoForm.style.display = 'none'
    }
  
    renderProjectForm() {
  
    }
  }

export default FormHandler