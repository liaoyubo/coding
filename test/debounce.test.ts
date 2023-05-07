import { debounce } from "../src/debounce";
import { timer } from "rxjs";

it("debounce", (done) => {
  let count = 0;
  const __addCount = () => {
    count++;
  };

  const addCount = debounce(__addCount);
  const source = timer(0, 100);

  const subscription = source.subscribe((i) => {
    if (i === 10) {
      subscription.unsubscribe();
      setTimeout(() => {
        expect(count).toBe(1);
        done();
      }, 400);
    } else {
      addCount();
    }
  });
});
