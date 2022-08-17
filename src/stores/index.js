import CounterStore from "./CounterStore";

const counterStore = new CounterStore();

const root = {
  counter: counterStore,
};

export default root;
