import React from 'react';

class Render extends React.Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = { mensaje: 'estado inicial' }
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    render(){
        console.log('render');
        return (
            <div>
                <h2>
                    hola render!
                </h2>
            </div>
        );
    }
}

export default Render;