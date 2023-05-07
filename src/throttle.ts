export function throttle(fn: Function, interval = 300) {
    let lock = false;
    let start = 0;
  
    return (...args: Array<any>) => {
      !start && (start = Date.now());
  
      if (lock) {
        return;
      }
      lock = true;
  
      fn(...args);
      const elapset = Date.now() - start;
      setTimeout(() => (lock = false), interval - (elapset % interval));
    };
  }
  