import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
 
function App() {

  //Definir el state
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [ gasto, guardarGasto ] = useState({});

  const [ gastos, guardarGastos ] = useState([]);

    //UseEffect que actualiza el restante
    useEffect(() => {
      guardarGastos([...gastos,gasto]);
    }, [gasto]);

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
              <Formulario guardarGasto={guardarGasto}/>
            </div>
            <div className="col-lg-6 lg-sm-12">
              <Listado gastos={gastos}/>

              <ControlPresupuesto presupuesto={presupuesto} restante={restante}/>
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
