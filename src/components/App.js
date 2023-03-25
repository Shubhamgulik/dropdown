import "./App.css";
import Dropdown from "./Dropdown";
function App() {
  const list = ["Java", "C++", "Python", "Javascript", "NodeJS"];
  return (
    <div className="App">
      <Dropdown list={list} />
    </div>
  );
}

export default App;
