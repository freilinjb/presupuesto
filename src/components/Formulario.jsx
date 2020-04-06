import React, { useState } from 'react';
import Error from './Error';
import shortId from 'shortid';

const Formulario = ({agregarNuevoGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, setError ] = useState(false);

    //cuando el usuario agrerga un gasto
    const agrergarGasto = e=> {
        e.preventDefault();

        //Valida
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        console.log(cantidad);
        
        //Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortId()
        }        

        //pasar el gasto al componente principal
        agregarNuevoGasto(gasto);


        //resetear el form
        guardarNombre('');
        guardarCantidad(0);
        
    }

    return ( 
        <form>
            <h4 className="titulo mt-3 p-2 bg-primary text-center text-white shadow rounded">Agrega tus gastos aquí</h4>
            { error ? <Error mensaje ="Ambos campos son obligatorios o Presupuesto son Incorrectos"/> : null}
            <div className="form-group">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input type="text" autofocus onChange={ e => guardarNombre(e.target.value) } value={nombre} name="nombre" className="form-control" placeholder="Ej. Transporte"/>
            </div>
            <div className="form-group">
                <label htmlFor="cantidad">Cantidad Gasto</label>
                <input onChange={ e=>guardarCantidad(parseInt(e.target.value,10))} value={cantidad} type="number" name="cantidad" className="form-control"/>
            </div>
            <input type="submit" onClick={agrergarGasto} className="btn btn-block btn-primary" value="Agregar Gasto"/>
        </form>
     );
}
 
export default Formulario;