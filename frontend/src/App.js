import './styles/main.scss';
import { Form } from './components/Form';
import { Argonautes } from './components/Argonautes';
import { Context } from './components/Context';
import { useState } from 'react';
import { Header } from './components/Header';

function App() {

  const [update, setUpdate] = useState(false);

  return (
    <Context.Provider value={{update, setUpdate}}>
    <div className="App">
      <Header/>
      <main className='main'>
        <Form />
        <Argonautes />
      </main>
    </div>
    </Context.Provider>
  );
}

export default App;
