/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 104:
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, mac, networkInterfaces; } 

//  Exports
// ================================================
module.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ 782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/4c0ab963bd09f34cbe97.svg";

/***/ }),

/***/ 207:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/da5c42223be72e07b420.svg";

/***/ }),

/***/ 378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/e4efcb06407fde1458a5.svg";

/***/ }),

/***/ 898:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/3c70b53795b8b86b5bd4.svg";

/***/ }),

/***/ 606:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./add.svg": 782,
	"./cancel.svg": 207,
	"./delete.svg": 378,
	"./edit.svg": 898
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 606;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/uniqid/index.js
var uniqid = __webpack_require__(104);
var uniqid_default = /*#__PURE__*/__webpack_require__.n(uniqid);
;// CONCATENATED MODULE: ./src/model.js


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
  constructor({id = uniqid_default().time(), title, description = '', dueDate, priority} = {}) {
    this.id = id
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }
}

class Project { 
  constructor({id = uniqid_default().time(), name = 'today', counter = 0} = {}) {
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


;// CONCATENATED MODULE: ./src/utils.js
class Utils { 
    static createIcon({url, alt = '', className = ''}) {
        const myImg = new Image()
        myImg.src = url
        myImg.alt = alt
        //myImg.classList.add(className)
        return myImg
        }
        updateIcon() {

        }
    // import all images in Map ['src path', 'dist path']
    static importAll(r) {
        return new Map(r.keys().map((value) => [value, r(value)] ))
    }

}

const utils_images = Utils.importAll(__webpack_require__(606))

  
;// CONCATENATED MODULE: ./src/viewForm.js

 

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
        url:utils_images.get('./add.svg'), 
        alt:'add project', 
        textContent: '', 
        classList: 'project-form__add-button'
      })
      this.closeProjectButton = this.initButton({
        url:utils_images.get('./cancel.svg'), 
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

;// CONCATENATED MODULE: ./src/view.js



class View {
    constructor() {
      //this.menuContainer = document.querySelector('.menu-container__projects')
      
    }
    /**
     * 
     * @param {*} param0 
     */
    renderTodo({id, title, desc, dueDate}) {
      
      let li = document.createElement('li'),
          input = document.createElement('input'),
          titleElem = document.createElement('div'),
          controls = document.createElement('div'),
          date = document.createElement('div'),
          dateCtrlContainer = document.createElement('div')

      li.classList.add(`${this.containerClass}__item`)
      li.dataset.id = id
      input.setAttribute('type', 'checkbox')
      input.setAttribute('name', '')
      input.setAttribute('id', 'checkbox')
      titleElem.classList.add(`${this.containerClass}__item-title`)
      controls.classList.add(`${this.containerClass}__item-controls`)
      date.classList.add(`${this.containerClass}__item-date`)
      dateCtrlContainer.classList.add(`${this.containerClass}__item-container`)
      
      /** BUTTONS ! */
      controls.append(Utils.createIcon({
        url: utils_images.get('./edit.svg'), 
        alt: 'edit', 
        className: `${this.containerClass}__item-controls-edit` 
      }))
      controls.append(Utils.createIcon({
        url: utils_images.get('./delete.svg'), 
        alt: 'delete', 
        className: `${this.containerClass}__item-controls-delete` 
      }))

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
      url: utils_images.get('./delete.svg'), 
      alt: 'delete'
    }))

    li.append(span)

    li.append(Utils.createIcon({
      url: utils_images.get('./delete.svg'), 
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
      url: utils_images.get(url), 
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

;// CONCATENATED MODULE: ./src/eventEmitter.js
const eventEmitter = (function event() {
    let events = {};
    let options = {}
    let on = function(evt, handler, {once = false} = {}) {
      (events[evt] || (events[evt] = [])).push(handler);
      (options[evt] || (options[evt] = [])).push(once);
    }
    
    let emit = function(evt, ...arg) {
      for(let i = 0; i < events[evt].length; i++) {
       events[evt][i](...arg)
        if(options[evt][i]) {
          events[evt].splice(i, 1)
          options[evt].splice(i, 1)
          i--
        }
      }
    }
  
    let removeLastEventHandler = function(evt) {
      events[evt].pop(); // delete event[last]
    }
    
    let getEvents = function() {
      return {...events};
    }
  
    return {
      on,
      emit,
      removeLastEventHandler,
      getEvents
    }
  })();

/* harmony default export */ const src_eventEmitter = (eventEmitter);
;// CONCATENATED MODULE: ./src/index.js










// class App {
//   init() {
//     new EventController
//      init
//   }
// }

class EventController {
    constructor(eventEmitter, view) {
        this.evt = eventEmitter; 
        this.view = view
        this.project = new Project()  
        this.todo = {}
        //this.formHandler = new FormHandler()
        this.ultodo = new UlTodo()
        this.aside = new Aside()
        this.buttons = new Buttons()
        this.inputs = new Inputs()
        this.ulproject = new UlProjects()
        this.maincontent = new MainContent()
        this.todoform = new TodoForm()
        this.projectform = new ProjectForm()
        
        this.renderTodo = (data) => this.ultodo.renderTodo(data)
        this.renderProject = (data) => this.ulproject.renderProject(data)
        this.addTodoToModel = (data) => this.project.addTodo(data)
        // db func this.addProjectToModel = (data) => 
      }

    init() {
      document.addEventListener('DOMContentLoaded', (e) => {
        this.buttons.createButton({name: 'addTodoFormButton', 
          url: './add.svg', 
          alt: 'view todo form', 
          textContent: 'Add task'
        })
        this.ultodo.renderButton({button: this.buttons.addTodoFormButton, classList: 'add-button'})
         
        this.buttons.createButton({name: 'addProjectFormButton', 
          url: './add.svg', 
          alt: 'view project form', 
          textContent: 'Add project'
        })
        this.aside.renderButton({button: this.buttons.addProjectFormButton, classList: 'add-button'})

        this.evt.emit('buttonsInit', '');
      })

      /**
       * Add evt listeners on form once
       */
      this.evt.on('addTodoForm', () => this.buttons.hide(this.buttons.addTodoFormButton))
      this.evt.on('addTodoForm', () => this.todoform.createTodoForm({name: 'todoForm'}), {once: true})
      this.evt.on('addTodoForm', () => {
        this.buttons.createButton({name: 'closeTodoButton', 
          url: './cancel.svg',
          textContent:'Close', 
          alt: 'close form', 
        })
        this.buttons.createButton({name: 'addTodoButton', 
          url: './add.svg',
          textContent:'Add', 
          alt: 'add todo', 
        })
        this.todoform.renderButton({button: this.buttons.addTodoButton, classList: 'add-button'})
        this.todoform.renderButton({button: this.buttons.closeTodoButton, classList: 'close-button'})
      }, {once:true})
      this.evt.on('addTodoForm', () => this.todoform.view())
      this.evt.on('addTodoForm', () => this.maincontent.renderForm({form: this.todoform.todoForm, classList: 'todo-form'}))
      this.evt.on('addTodoForm', () => { 
        this.buttons.addTodoButton.addEventListener('click', () => {
          let data = this.todoform.fetchForm()
          data.id = uniqid_default().time()
          console.log(data);
          this.evt.emit('addTodo', data);
        })
        this.buttons.closeTodoButton.addEventListener('click', () => {
          this.todoform.hide()
          this.buttons.view(this.buttons.addTodoFormButton)
        })
      }, {once: true})
      /**
       * addTodo
       */
      this.evt.on('addTodo', this.addTodoToModel)
      this.evt.on('addTodo', this.renderTodo)
      this.evt.on('addTodo', () => console.log(this.project))

      // db func this.evt.on('addProject', this.addProjectToModel)
      this.evt.on('addProjectForm', () => this.projectform.renderProjectForm(), {once: true})
      this.evt.on('addProjectForm', () => this.projectform.view())
      this.evt.on('addProjectForm', () => { 
        this.projectform.addProjectButton.addEventListener('click', (e) => {
          this.evt.emit('addProject', this.projectform.fetchProjectForm())
          })
        this.projectform.closeProjectButton.addEventListener('click', () => {
          this.projectform.hide()
          this.buttons.view(this.buttons.addProjectFormButton)
        })
        }, {once: true})
      // 
      this.evt.on('addProject', this.renderProject)
      //
      this.evt.on('buttonsInit', () => {
        this.buttons.addTodoFormButton.addEventListener('click', () => {
          this.evt.emit('addTodoForm', '')
        })
        this.buttons.addProjectFormButton.addEventListener('click', () => 
        {
          this.buttons.hide(this.buttons.addProjectFormButton)
          //this.projectform.renderProjectForm()
          this.evt.emit('addProjectForm', '')
        })
      })
      
      this.evt.emit('addTodo', {title: 'first'})

      
      
    }
}

// class ButtonsController extends Controller{

// }

class ModelController {

}

//mediator for Firebase API
// class DBHandler {
//     dbConnection()
//     dbRead()
//     dbUpdate()
//     dbDelete()
// }

const app = new EventController(src_eventEmitter, new View())
app.init()
})();

/******/ })()
;