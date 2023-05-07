export function debounce(fn: Function, delay = 300) {
    let timer;
  
    return (...args: Array<any>) => {
      clearTimeout(timer);
  
      timer = setTimeout(() => fn(...args), delay);
    };
  }
  