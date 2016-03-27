(function(window, document, undefined){
  var Observer = function() {
    return {
      'record': function() { },
      'incrementEvent': function(counterID) { }
    };
  }();
  window['Observer'] = Observer;
  window['Observerapp'] = Observer;
})(this, document);
