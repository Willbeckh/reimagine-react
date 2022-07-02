// import logo from './logo.svg';
import "./App.css";
import Form from "./components/form/Form";
import Todo from "./components/todos/Todos";
// import Navbar from "./components/Navbar";

function App() {
  let tasks = ["react app", "document api with swagger"];

  return (
    <div className="App">
      {/* <Navbar /> */}
      <p>Tupo site!! tupo site!! 🤣</p>
      <small>Kata simu wewe</small>
      <div className="Container">
        <Form />
        <hr />
        <Todo tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
