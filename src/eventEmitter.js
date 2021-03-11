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

export default eventEmitter