import React, { Component } from 'react';

// FASE DE DESMONTADO DE UN COMPONENTE

class DesmontarComponente extends Component {

    state = { windowWidth : 0 }

    _updateStateWithWindowWidth = () => {
        console.log('_updateStateWithWindowWidth')
        this.setState({ windowWidth: document.body.clientWidth })
      }

    componentDidMount = () => {
        this._updateStateWithWindowWidth();
        window.addEventListener(
            'resize',
            this._updateStateWithWindowWidth
        );
    }

    // nos ayuda a desuscribirse a eventos que no maneja react
    componentWillUnmount = () => {
        console.log('componentWillUnmont');
        window.removeEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }

    render(){
        return (
            <div>
                <p>Componente de desmontado!</p>
                <span>{this.state.windowWidth}</span>
            </div>
        );
    }
}

class ComponentWillUnmount extends Component {
    state = { monstarcomponente : true }

    render(){
        if ( this.state.monstarcomponente ){
            return (
                <div>
                    <h1>
                        ComponentWillUnmount
                    </h1>
                    < DesmontarComponente />
                    <button onClick={ () => this.setState({ monstarcomponente: false })}>
                        Desmontar componente
                    </button>
                </div>
            );
        }else{
            return (
                <p>El componente se ha desmontado!</p>
            );
        }
    }
}

export default ComponentWillUnmount;