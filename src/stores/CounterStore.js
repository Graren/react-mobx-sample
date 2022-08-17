import { action, autorun, makeObservable, observable } from "mobx";

class CounterStore {
  value = 0;

  constructor() {
    makeObservable(this, {
      value: observable,
      increment: action,
      decrement: action,
    });
    autorun(() => this.report());
  }

  increment = () => {
    this.value += 1;
  };
  decrement = () => {
    this.value -= 1;
  };

  report() {
    console.log("DOG THE VALUE IS: ", this.value);
  }
}

export default CounterStore;
