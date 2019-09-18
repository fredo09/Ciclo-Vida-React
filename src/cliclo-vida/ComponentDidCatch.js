import React from 'react';

class ButonError extends React.Component {
    state = {throw_Error : false }
    render(){
        if (this.state.throw_Error) {
            throw new Error ('se ha producido un error');
        }
        return (
            <button onClick={() => { this.setState({ throw_Error: true }) }}>
                Lanzar Error 
            </button>
        )
    }
}

class ComponentDidCatch extends React.Component{
    state = {hasError :false , MsgError : ''}

    //se ejecuta cuando el componente hijo tiene algun error
    // este debe de ser llamado desde el padre
    componentDidCatch = (err, info) => {
        console.log('ComponentDidCatch');
        console.log(err, info);
        this.setState({hasError: true, MsgError: err.toString()});
    }

    render(){
        if (this.state.hasError){
            return(
                <div>
                    <p>Error en el componenete {this.state.MsgError}</p>
                    <button onClick={() => {this.setState({ hasError:false }) }}>
                        Volver a la Aplicacion
                    </button>
                </div>
            );
        }

        return(
            <div>
                <h1>
                    ComponentDidCatch
                </h1>
                <ButonError />
            </div>
        );
    }
}

export default ComponentDidCatch;