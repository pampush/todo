import {Utils, images} from './utils'
import {startOfWeek, add, getDate, startOfMonth, isThisMonth, compareAsc} from 'date-fns'

class View {
    constructor() {
    }
    /**
     * 
     * @param {*} param0 
     */
    renderTodo({id, title, description, duedate, priority, projectid}) {
      const li = document.createElement('li'),
          input = document.createElement('input'),
          titleElem = document.createElement('div'),
          controls = document.createElement('div'),
          date = document.createElement('div'),
          dateCtrlContainer = document.createElement('div'),
          editButton = document.createElement('div'),
          delButton = document.createElement('div'),
          descriptionNode = document.createElement('div')

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
      descriptionNode.classList.add(`${this.containerClass}__item-description`)
      descriptionNode.style.display = 'none'
      descriptionNode.textContent = description

      editButton.append(Utils.createIcon({
        url: images.get('./edit.svg'), 
        alt: 'edit'
      }))
      delButton.append(Utils.createIcon({
        url: images.get('./delete.svg'), 
        alt: 'delete'
      }))

      controls.append(editButton, delButton)
      titleElem.textContent = title
      date.textContent = duedate
      dateCtrlContainer.append(date, controls)
      li.append(input, titleElem, dateCtrlContainer, descriptionNode)

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
  projectDec({projectid}) {
    const projectNode = document.querySelector(`[data-id="${projectid}"] .menu-container__subitem-counter`)
    projectNode.textContent = (+projectNode.textContent) - 1 
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
}


/* or args (container, containerClass) in render functions? */ 
class UlTodo extends View {
  constructor() {
    super()
    this.container = this.buttonsContainer = document.querySelector('.todos-container')
    this.containerClass = 'todos-container' 
  }

  descriptionToggle(id) {
    let desc = document.querySelector(`[data-id="${id}"] .${this.containerClass}__item-description`)
    if(desc.style != '') {
      desc.style.display = (desc.style.display == 'none') ? 'flex' : 'none'
    }
    else 
      desc.style.display = 'none'
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

class EditForm extends View {
  constructor(todoid) {
    super()
    this.buttons = new Buttons()  // ??
    this.calendar = new Calendar()
    this.todo = document.querySelector(`[data-id="${todoid}"]`)
    this.todoid = todoid
    this.title = this.todo.querySelector(`.todos-container__item-title`).textContent
    this.duedate = this.todo.querySelector(`.todos-container__item-date`).textContent
    this.description = this.todo.querySelector('.todos-container__item-description').textContent
    this.priority = this.todo.querySelector(`.todos-container__item-date`).classList.contains('priority-0') ? 0 : 
    this.todo.querySelector(`.todos-container__item-date`).classList.contains('priority-1') ? 1 :
    this.todo.querySelector(`.todos-container__item-date`).classList.contains('priority-2') ? 2 : false
    this.descriptionNode = null
  }

  renderEdit() {
    this.editTodo = document.createElement('li')
    const nodesConfig = {
      input: ['title'],
      div: ['controls', 'inputs'],
    }
    const nodes = {}
    for(let [key, item] of Object.entries(nodesConfig)) {
      for(let value of item)
        nodes[value] = document.createElement(`${key}`)
    }

    this.todo.style.display = 'none' 
    this.editTodo.classList.add(`todos-container__item`)
    this.editTodo.classList.add(`todos-container__item-edit`)
    this.editTodo.dataset.id = this.todoid
    nodes.title.type = 'text'
    nodes.title.placeholder = 'add title'
    nodes.title.required = 'true'
    nodes.title.value = this.title
    nodes.controls.classList.add(`todos-container__item-edit__controls`)
    nodes.inputs.classList.add(`todos-container__item-edit__inputs`)
    
    // nodes.date.classList.add(`todos-container__item-edit__inputs-date`)
    // nodes.date.append(Utils.createIcon({
    //   url: images.get('./calendar.svg'), 
    //   alt: 'date'
    // }))
    this.buttons.createButton({name:'date', alt:'date', url: './calendar.svg'})
    this.buttons.date.classList.add('todos-container__item-edit__inputs-date')
    // nodes.submit.classList.add(`todos-container__item-edit__inputs-add`)
    // nodes.submit.append(Utils.createIcon({
    //   url: images.get('./add.svg'), 
    //   alt: 'submit',
    // }))
    this.buttons.createButton({name:'submit', alt:'submit', url: './add.svg'})
    this.buttons.submit.classList.add('todos-container__item-edit__inputs-add')
    // nodes.cancel.classList.add(`todos-container__item-edit__inputs-cancel`)
    // nodes.cancel.append(Utils.createIcon({
    //   url: images.get('./cancel.svg'), 
    //   alt: 'cancel',
    // }))
    this.buttons.createButton({name:'cancel', alt:'cancel', url: './cancel.svg'})
    this.buttons.cancel.classList.add('todos-container__item-edit__inputs-cancel')
    // nodes.priority.classList.add(`todos-container__item-edit__inputs-priority`)
    // nodes.priority.append(Utils.createIcon({
    //   url: images.get('./flag.svg'), 
    //   alt: 'priority',
    // }))
    this.buttons.createButton({name:'priority', alt:'priority', url: './flag.svg'})
    this.buttons.priority.classList.add('todos-container__item-edit__inputs-priority')
    // nodes.description.classList.add(`todos-container__item-edit__inputs-description`)
    // nodes.description.append(Utils.createIcon({
    //   url: images.get('./description.svg'), 
    //   alt: 'description'
    // }))
    this.buttons.createButton({name:'description', alt:'description', url: './description.svg'})
    this.buttons.description.classList.add('todos-container__item-edit__inputs-description')

    nodes.controls.append(this.buttons.submit, this.buttons.cancel)
    nodes.inputs.append(nodes.title, this.buttons.description, this.buttons.date, this.buttons.priority)
    this.editTodo.append(nodes.inputs, nodes.controls)
    this.todo.after(this.editTodo)
  }

  removeEdit() {
    this.editTodo.remove()
    this.todo.style.display = 'flex'
  }

  toggleDescription() {
    if(this.descriptionNode) {
      this.descriptionNode.remove()
      this.descriptionNode = null
      return
    }
    const inputs = document.querySelector(`.todos-container__item-edit__inputs`)
    this.descriptionNode = document.createElement('textarea')
    this.descriptionNode.classList.add('todos-container__item-edit__description')
    this.descriptionNode.value = this.description
    inputs.after(this.descriptionNode)
  }

  toggleDate() {
    if(this.priorityNode) {
      this.priorityNode.remove()
      this.priorityNode = null
      return
    }
    const inputs = document.querySelector(`.todos-container__item-edit__inputs`)
    
    // this.dateNode = document.createElement('input')
    // this.dateNode.type = 'date'
    // this.dateNode.min = (new Date()).toISOString().slice(0, 10)
    this.calendar.render(inputs)
    //inputs.after(this.dateNode)
  }

  togglePriority() {
    if(this.priorityNode) {
      this.priorityNode.remove()
      this.priorityNode = null
      return
    }
    const inputs = document.querySelector(`.todos-container__item-edit__inputs`),
          options = ['low', 'medium', 'high']
    this.priorityNode = document.createElement('select')
    
    for(let item of options) {
      let option = document.createElement('option')
      option.textContent = item
      this.priorityNode.append(option)
    }
    this.priorityNode.selectedIndex = this.priority
    inputs.after(this.priorityNode)
  }
}

class Calendar {
  constructor() {
    this.buttons = new Buttons()

    const nodesConfig = {
            div: ['mon', 'tue', 'wed', 'thi', 'fri', 'sat', 'sun'],
          },
          numOfCalendarRows = 6,
          daysInWeek = 7,
          nodes = {},
          table = this.initTable(),
          dateHeader = document.createElement('div'),
          dateControls = document.createElement('div'),
          daylist = document.createElement('div'),
          datelist = document.createElement('div')

          daylist.classList.add('date-picker__day-list')
          for(let [key, item] of Object.entries(nodesConfig)) {
            for(let value of item) {
              nodes[value] = document.createElement(`${key}`)
              nodes[value].classList.add('date-picker__day-list__cell')
              nodes[value].textContent = value
              daylist.append(nodes[value])
            }
          }

    this.dateContainer = document.createElement('div')
    this.dateContainer.classList.add('date-container')
    this.calendar = document.createElement('div')
    this.calendar.classList.add('date-picker')
    
    datelist.classList.add('date-picker__date-list')
    dateHeader.classList.add('date-container__header')
    dateControls.classList.add('date-container__controls')

    this.buttons.createButton({name:'prev', alt:'previous', url: './left-arrow.svg'})
    this.buttons.prev.classList.add('date-container__controls-prev')
    this.buttons.createButton({name:'next', alt:'next', url: './right-arrow.svg'})
    this.buttons.next.classList.add('date-container__controls-next')

    for(let i = 0; i < numOfCalendarRows; i++) {
      const row = document.createElement('div')
      row.classList.add('date-picker__date-list__row')
      for(let j = 0; j < daysInWeek; j++) {
        const cell = document.createElement('div')
        cell.classList.add('date-picker__date-list__cell')
        cell.textContent = table[i][j].date
        if(!table[i][j].currentmonth)
          cell.classList.add('date-picker__date-list__cell-filler') 
        row.append(cell)
      }
      datelist.append(row)
    }
    
    dateControls.append(this.buttons.prev, this.buttons.next)
    this.calendar.append(daylist, datelist)
    this.dateContainer.append(dateControls, dateHeader, this.calendar)
  }

  render(parent) {
    parent.after(this.dateContainer)
  }

  initTable() {
    let date = startOfWeek(startOfMonth(new Date()), { weekStartsOn: 1 }),
    table = []
    for(let i = 0; i < 6; i++) {
      let row = []
      for(let j = 0; j < 7; j++) {
        row.push({
          date: getDate(date), 
          currentmonth: (compareAsc(date, startOfMonth(new Date())) >= 0) ? true : false
        })
        date = add(date, {days: 1})
      }
      table.push(row)
    }

    return table
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
export {View, UlTodo, Aside, Buttons, MainContent, UlProjects, EditForm}