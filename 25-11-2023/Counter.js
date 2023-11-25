function createCounter() {
  let count = 0;
  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    getCount,
  };
}

const counter = createCounter();
console.log(counter.getCount());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
