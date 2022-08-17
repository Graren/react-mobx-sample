import MobxCounter from "./librarySpecific/Counter";
import "./App.css";
import rootStore from "./stores";

function App() {
  return <MobxCounter counter={rootStore.counter} />;
}

export default App;
