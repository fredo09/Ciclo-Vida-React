/*
    USO DEL FETCH PARA REACT
    EL FETCH ES PARA PERDIR INFORMACION A DATOS DE MODO REMOTO 
*/

import React from 'react';

class FetchExample extends React.Component{
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = { bpi : {} };
    }

    // SE RENOMBRARA EL METODO COMPONENTWILLMOUNT
    UNSAFE_componentWillMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then( data => {
                console.log(data);
                const { bpi } = data;
                this.setState({ bpi: bpi });
            });
    }

    _renderCurrencies(){
        const { bpi } = this.state;
        const currencies = Object.keys(bpi);
        return currencies.map( currency => (
            <div key={currency}>
                1 BTC IS { bpi[currency].rate }
                <span>{ currency }</span>
            </div> 
        ));
    }

    render(){
        console.log('render');
        return(
            <div>
                <h1>
                    Precio para el Bitcoin
                </h1>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default FetchExample;