import { useState } from 'react';
import './App.css';
import logoD from "./logo.jpg"
function App() {


  const [maximo, setMaximo] = useState(0)
  const [premio, setPremio] = useState(0)
  const [numero, setNumero] = useState()

  function handleMath() {

    if (premio < 1 || maximo < 1) {
      alert("Forneça o número do prêmio ou número máximo")
      return
    }

    let a = Math.floor(Math.random() * maximo);
    if (a == premio) {
      handleMath();
    } else {
      setNumero(a)
    }
  }

  return (
    <div className='container'>
      <header>
      <img alt='logo' src={logoD}/>
      </header>

      <div className='container-form'>
        <label>Numero maximo:</label>
        <input type='number' value={maximo} onChange={v => setMaximo(v.target.value)} placeholder='Número máximo...' /><br /><br />
        <label>Numero prêmio:</label>
        <input type='number' value={premio} onChange={v => setPremio(v.target.value)} placeholder='Número prêmio...' />


        <div className='div-numero'>{!numero ? 0 : numero}</div>

        <button onClick={handleMath}>Rodar</button>
      </div>
    </div>
  );
}

export default App;
