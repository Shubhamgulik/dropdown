import "./App.css";
import Dropdown from "./Dropdown";
function App() {
  // List of subjects passed to the Dropdown component
  const list = ["Java", "C++", "Python", "Javascript", "NodeJS"];
  return (
    <div className="App">
      {/* Passed list props to Dropdown component */}
      <Dropdown list={list} />
    </div>
  );
}

export default App;
