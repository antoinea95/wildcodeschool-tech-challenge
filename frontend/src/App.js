import './App.css';
import { Form } from './components/Form';
import { Argonautes } from './components/Argonautes';
import { Context } from './components/Context';
import { useState } from 'react';

function App() {

  const [update, setUpdate] = useState(false);

  return (
    <Context.Provider value={{update, setUpdate}}>
    <div className="App">
      <Form />
      <Argonautes />
    </div>
    </Context.Provider>
  );
}

export default App;
