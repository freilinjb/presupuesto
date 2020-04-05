import React,{ Fragment} from 'react'

const Pregunta = () => {
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form action="">
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Coloca tu presupuesto"/>
                </div>
                <button type="submit" className="btn btn-block btn-primary">Definir presupuesto</button>
            </form>
        </Fragment>
     );
}
 
export default Pregunta;