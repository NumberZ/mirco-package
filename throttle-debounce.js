function throttle(wait, func) {
  var timeoutId, args, previous = 0, context, result;
  function later() {
    previous = new Date();
    timeoutId = null;
    result = func.apply(context, args);
  }
  return function() {
    var now = new Date();
    context = this;
    var remaining = wait - (now - previous);
    if (remaining <= 0) {
      clearTimeout(timeoutId);
      timeoutId = null;
      previous = now;
      result = func.apply(context, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(later, remaining);
    }
    return result;
  }
}