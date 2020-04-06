import React,{Fragment} from 'react';

const ControlPresupuesto = ({presupuesto, restante}) => {
    console.log(`Restante: CP: ${restante}`);
    
    return ( 
        <Fragment>
            <div className="alert alert-primary"> 
                Presupuesto: $ {presupuesto}
            </div>
            <div className="alert">
                Restante: $ {restante}
            </div>
        </Fragment>
     );
}
 
export default ControlPresupuesto;