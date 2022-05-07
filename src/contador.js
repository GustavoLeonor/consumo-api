import { useState } from 'react'
import './contador.css'

function Contador() {
  
    const [contador, setContador] = useState(0);

    //funcion de flecha
    const incrementar = (previo) => {return previo + 1;};
    const decremetar = (previo) => {return previo - 1;};
  
    return (
      <div className="App">
        <h1>lista post</h1>
        <p>{contador}</p>
        <button onClick={() => setContador(incrementar)} className='btn-incremento'>+</button>
        <button onClick={() => setContador(decremetar)} className='btn-incremento'>-</button>
      </div>
    );
}

export default Contador;