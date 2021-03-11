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

  
;// CONCATENATED MODULE: ./src/view.js



class View {
    constructor() {
      this.todoContainer = document.querySelector('.todos-container')
      this.addTodoFormButton = document.querySelector('.todos-container__add-button')
      
      this.menuContainer = document.querySelector('.menu-container__projects')
      this.addProjectButton = document.querySelector('.menu-container__add-button')
      
      this.buttons = [{button: this.addProjectButton, alt: 'add project', url: utils_images.get('./add.svg'), textContent: 'Add project'},
      { button: this.addTodoFormButton, alt: 'addTodo', url: utils_images.get('./add.svg'), textContent: 'Add task'}]
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
        url: utils_images.get('./edit.svg'), 
        alt: 'edit', 
        className: 'todos-container__item-controls-edit' 
      }))
      controls.append(Utils.createIcon({
        url: utils_images.get('./delete.svg'), 
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
      url: utils_images.get('./delete.svg'), 
      alt: 'delete'
    }))

    li.append(span)

    li.append(Utils.createIcon({
      url: utils_images.get('./delete.svg'), 
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

/* harmony default export */ const view = (View);
;// CONCATENATED MODULE: ./src/viewForm.js


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
          this.closeTodoFormButton = this.initButton({url:utils_images.get('./cancel.svg'),textContent:'Close', alt: 'close form', classList: 'todo-form__close-button'})
          this.addTodoFormButton = this.initButton({url:utils_images.get('./add.svg'), alt:'add todo', textContent: 'Add', classList: 'todo-form__add-button'})
          
          
          formContainer.classList.add('todo-form')
          buttonsContainer.classList.add('todo-form__buttons-container')
          inputTitle.type = 'text'
          inputTitle.placeholder = 'add title'
          inputTitle.required = 'true'
          inputDescription.type = 'text'
          inputDescription.placeholder ='add description'
          inputDate.type = 'date'
          
          
          submitButton.append(Utils.createIcon({
            url: utils_images.get('./add.svg'), 
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

/* harmony default export */ const viewForm = (FormHandler);
;// CONCATENATED MODULE: ./src/eventEmitter.js
const eventEmitter = (function event() {
    let events = {};
    let last = undefined;
  
    let on = function(evt, handler) {
      (events[evt] || (events[evt] = [])).push(handler);
    }
  
    let emit = function(evt, ...arg) {
      last = evt;
      for(let item of events[evt])
        item(...arg);
    }
  
    let removeLastEventHandler = function() {
      events[last].pop(); // delete event[last]
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








class Controller {
  
}

class EventController {
    constructor(eventEmitter, view) {
        this.evt = eventEmitter; 
        this.view = view
        this.project = new Project()  
        this.todo = {}
        this.formHandler = new viewForm()

        this.renderTodo = (data) => this.view.renderTodo(data)
        this.renderProject = (data) => this.view.renderProject(data)

        this.addTodoToModel = (data) => this.project.addTodo(data)
        // db func this.addProjectToModel = (data) => 
      }

    init() {
      document.addEventListener('DOMContentLoaded', (e) => {
        this.view.renderButtons()
      })

      
      this.evt.on('addTodoForm', () => this.formHandler.closeTodoFormButton.addEventListener('click', (e) => {   
        this.view.viewAddButton()
        this.formHandler.hideForm()
      }))

      this.evt.on('addTodoForm', () => this.formHandler.addTodoFormButton.addEventListener('click', () => {
        this.evt.emit('addTodo', {title: 'added'});
      }))
      this.evt.on('addTodo', this.addTodoToModel)
      this.evt.on('addTodo', this.renderTodo)
      this.evt.on('addTodo', () =>console.log(this.project))

      // db func this.evt.on('addProject', this.addProjectToModel)
      this.evt.on('addProject', this.renderProject)

      this.evt.emit('addTodo', {title: 'first'})

      this.view.addTodoFormButton.addEventListener('click', (e) => {
        this.view.hideAddButton()
        this.formHandler.renderTodoForm()
        this.evt.emit('addTodoForm', '')//{id: 1, title: 'added'})
      })
      
      this.view.addProjectButton.addEventListener('click', (e) => {
        this.evt.emit('addProject', {title: 'sport'})
      })
    }
}

class ViewController {

}

class ModelController {

}

//mediator for Firebase API
// class DBHandler {
//     dbConnection()
//     dbRead()
//     dbUpdate()
//     dbDelete()
// }

const app = new EventController(src_eventEmitter, new view())
app.init()
})();

/******/ })()
;