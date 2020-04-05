import React, { useState } from 'react'

const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);

    return ( 
        <form>
            <h4 className="titulo mt-3 p-2 bg-primary text-center text-white shadow rounded">Agrega tus gastos aquí</h4>
            <div className="form-group">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input type="text" onChange={ e => guardarNombre(e.target.value) } value={nombre} name="nombre" className="form-control" placeholder="Ej. Transporte"/>
            </div>
            <div className="form-group">
                <label htmlFor="cantidad">Cantidad Gasto</label>
                <input onChange={ e=>guardarCantidad(parseInt(e.target.value,10))} value={cantidad} type="number" name="cantidad" className="form-control"/>
            </div>
            <input type="submit" className="btn btn-block btn-primary" value="Agregar Gasto"/>
        </form>
     );
}
 
export default Formulario;