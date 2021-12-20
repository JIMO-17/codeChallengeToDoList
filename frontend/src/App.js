import logo from './logo.svg';
// import './App.css';
import './css/style.css';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
