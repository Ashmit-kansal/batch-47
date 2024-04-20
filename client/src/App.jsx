import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexbox from './Flexbox';
import BootstrapDemo from './BootstrapDemo';

// js + html = JSX


function App() {
  const [displayComponent, setdisplayComponent] = useState(true);

  const name = "Nikhil";
  const id = 101;

  const greet = (e) => {
    alert(`hello ${name}`)
  }

  // props are read only
  return (
    <>
    <Flexbox />
    {/* <BootstrapDemo /> */}
      {/* conditional rendering */}
      {/* {displayComponent ? <FunctionalComponent name={name} id={id} fn={greet} /> : null} */}
      {/* <button onClick={() => setdisplayComponent(!displayComponent)}> {displayComponent ? 'Hide' : 'Show'}</button > */}
    </>
    // <div>
    //   Hello { name }
    //   <button onClick={greet}> Greet</button>
    // </div>
  )
}

export default App;