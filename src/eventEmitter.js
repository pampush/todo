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

export default eventEmitter