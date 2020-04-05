import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
 
function App() {

  //Definir el state
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  return (
    <div className="container">
     <header>
       <h1>Gastos semanal</h1>
       <div className="contenido-principal contenido">
         <Pregunta guardarPresupuesto={guardarPresupuesto} guardarRestante={guardarRestante}/>
         <div className="row justify-content-center">
           <div className="col-lg-6 lg-sm-12">
            <Formulario/>
           </div>
           <div className="col-lg-6 lg-sm-12">
            2
           </div>
         </div>
       </div>
     </header>
    </div>
  );
}

export default App;
