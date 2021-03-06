import React,{ Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

//Se crea loca porque no pasa por los diferentes componentes
//Definir el state

const Pregunta = ({ guardarRestante, guardarPresupuesto, actualizarPregunta}) => {

    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        // console.log(e.target.value); //probando el envio de dato
        guardarCantidad(parseInt(e.target.value, 10));
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e =>{

        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true);
            return;
        }

        //si pasa la validacion
        setError(false);
        guardarPresupuesto(cantidad) ;
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    //version corta
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje="El presupuesto fue incorrecto"/> : null}
            <form action="">
                <div className="form-group">
                    {/* version corta de onChange de una sola lina */}
                    {/* <input onChange={e=>guardarCantidad(parseInt(e.target.value))} type="number" className="form-control" placeholder="Coloca tu presupuesto"/> */}
                    <input onChange={definirPresupuesto} autoFocus type="number" className="form-control" placeholder="Coloca tu presupuesto"/>
                </div>
                <button onClick={agregarPresupuesto} type="submit" className="btn btn-block btn-primary">Definir presupuesto</button>
            </form>
            <hr/>
        </Fragment>
     );
}

Pregunta.propTypes = {
    guardarRestante: PropTypes.func.isRequired,
    guardarPresupuesto: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
 
export default Pregunta;