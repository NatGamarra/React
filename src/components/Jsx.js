import React, { Fragment } from 'react';

const Jsx = () => {
    //const saludo = 'Hola Jsx';
    const temperatura = 21;

    return ( 
        <Fragment>
        <h2>Frio o calor?</h2>
        <h4>
        {temperatura > 20 ? 'Calor' : 'Frio'
            }
        </h4>
        </Fragment>
     );
}
 
export default Jsx;
