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
  constructor({id, title, description = '', dueDate, priority} = {}) {
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


;// CONCATENATED MODULE: ./src/view.js
//import all images in Map ['src path', 'dist path']
function importAll(r) {
  return new Map(r.keys().map((value) => [value, r(value)] ));
}

const view_images = importAll(__webpack_require__(606));

class View {
    constructor() {
      this.todoContainer = document.querySelector('.todos-container')
      this.addButton = document.querySelector('.todos-container__add-button')
      this.viewIcon = new ViewIcon()
    }

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
      
      controls.append(this.viewIcon.createIcon({url: view_images.get('./edit.svg'), alt: 'edit', className: 'todos-container__item-controls-edit' }))
      controls.append(this.viewIcon.createIcon({url: view_images.get('./delete.svg'), alt: 'delete', className: 'todos-container__item-controls-delete' }))

      desc.textContent = title
      li.append(input, desc, controls)

      this.todoContainer.append(li)
    }

}

class ViewIcon {
  createIcon({url, alt = '', className = ''}) {
    const myImg = new Image()
    myImg.src = url
    myImg.alt = alt
    myImg.classList.add(className)
    return myImg
  }
}
/* harmony default export */ const view = (View);
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

        this.render = (data) => this.view.renderTodo(data)
        this.addTodoToModel = (data) => this.project.addTodo(data)
    }

    init() {
      this.evt.on('addTodo', this.addTodoToModel)
      this.evt.on('addTodo', this.render)
      this.evt.on('addTodo', ()=>console.log(this.project))


      this.view.addButton.addEventListener('click', (e) => {
        this.evt.emit('addTodo', {id: 1, title: 'added'})
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