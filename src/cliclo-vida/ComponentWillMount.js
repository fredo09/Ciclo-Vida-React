import React from 'react';

class ComponentWillMount extends React.Component{
    constructor(props){
        console.log('Ejecutando ComponentWillMount componente');
        super(props);
        console.log('constructor');
        this.state = { mensaje: 'mensaje Inicial' };
        console.log(this.state.mensaje);
    }

    // modificamos el state
    componentWillMount(){
        console.log('ComponentWillMount');
        this.setState({mensaje: 'mensaje modificado'});
    }

    render(){
        console.log('render');
        return (
            <div>
                <h1>
                    ComponentWillMount
                </h1>
                <p>{this.state.mensaje}</p>
            </div>
        );
    }
}

export default ComponentWillMount;