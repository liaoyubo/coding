import { throttle } from "../src/throttle";
import { timer } from "rxjs";

it("throttle", (done) => {
  let count = 0;
  const __addCount = () => {
    count++;
  };

  const addCount = throttle(__addCount);
  const source = timer(0, 100);

  const subscription = source.subscribe((i) => {
    if (i === 10) {
      subscription.unsubscribe();
      setTimeout(() => {
        expect(count).toBe(4);
        done();
      }, 400);
    } else {
      addCount();
    }
  });
});
