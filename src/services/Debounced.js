const Debounced = {
  queue: {},
  saveInterval: 500, // 10 seconds
  start: (id, callback, ms) => {
    if (typeof callback !== 'function') {
      throw new Error('Debounced.start: invalid arguments, at least callback expected');
    }
    const msValue = ms || 500;
    const timeoutId = Debounced.queue[id];
    clearTimeout(timeoutId);
    Debounced.queue[id] = setTimeout(() => {
      callback(); delete Debounced.queue[id];
    }, msValue);
  }
};

export default Debounced;
