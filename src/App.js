import "./App.css";
import Counter from "./components/useState/Counter";
// import logo from './logo.svg';
import Input from "./components/useState/Input";
import ArrayOfObj from "./components/useState/ArrayOfObj";
function App() {
  return (
    <div className="App">
      <h4>Working with React useState Hook</h4>
      <p>Counter</p>
      <Counter />
      <hr />
      <p>User Input</p>
      <Input />
      <hr />
      <p>Array of Obj</p>
      <ArrayOfObj />
    </div>
  );
}

export default App;
