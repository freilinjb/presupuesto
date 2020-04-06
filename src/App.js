import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
 
function App() {

  //Definir el state
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);

  const [ gastos, guardarGastos ] = useState([]);

  //cuando agregamos un nuevo gasto
  const agregarNuevoGasto = gasto => {
    guardarGastos([...gastos,gasto]);
  }


  return (
    <div className="container">
     <header>
       <h1>Gastos semanal</h1>
       <div className="contenido-principal contenido">
         { mostrarpregunta ? 
         (          
            <Pregunta 
            guardarPresupuesto={guardarPresupuesto} 
            guardarRestante={guardarRestante} 
            actualizarPregunta={actualizarPregunta}/>
         )
         :
         (
          <div className="row justify-content-center">
            <div className="col-lg-6 lg-sm-12">
              <Formulario agregarNuevoGasto={agregarNuevoGasto}/>
            </div>
            <div className="col-lg-6 lg-sm-12">
              <h2>Listado</h2>
              { gastos.map(gasto =>(
                <Listado/>
              ))}
            </div>
         </div>
         )
         }
       </div>
     </header>
    </div>
  );
}

export default App;
