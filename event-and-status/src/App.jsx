import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import AnotherButton from './AnotherButton';
import './App.css';

function clickHandlerOut(event) {
  console.log("click tambien", event);
}

function App() {
  const [counter, setCounter] = useState(0);
  //const [password, setPassword] = useState("") //String
  //const [tareas, setTareas] = useState([]); // Arreglo
  //const [koder, setKoder] = useState([]); // Object
function avanzarContador() {
setCounter(counter + 1)
}


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={avanzarContador}>
          count is {counter}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <AnotherButton text="Hi, I am another button" onClick={() => console.log("Al clickazo")} />
      <AnotherButton text="otro boton mas" alClick={avanzarContador} />
    </>
  );
}

export default App;

