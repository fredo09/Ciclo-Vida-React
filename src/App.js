import React from 'react';
import './App.css';
// import ComponentWillMount from './cliclo-vida/ComponentWillMount';
// import Render from './cliclo-vida/Render';
// import ComponentDidMount from './cliclo-vida/ComponentDidMount';
// import FetchExample from './cliclo-vida/FetchExample';
// import ComponentWillReceiveProps from './cliclo-vida/ComponentWillReceiveProps';
// import ComponentWillUnmount from './cliclo-vida/ComponentWillUnmount';
import ComponentDidCatch from './cliclo-vida/ComponentDidCatch';

class App extends React.Component {
  // Primera fase del ciclo de vida de un componente "constructor"
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
          <h1>Ciclo de vida React</h1>
          {/* PRIMERA FASE DEL CICLO DE VIDA */}
          { /* MONTADO */}
          { /*<ComponentWillMount /> */}
          { /*<Render /> */ }
          {/* <ComponentDidMount /> */ }
          {/*<FetchExample /> */ }
          {/* SEGUNDA FASE DEL CLICLO DE VIDA */}
          {/* ACTUALIZACION */ }
          {/* <ComponentWillReceiveProps /> */}
          {/* TERCERA FASE DEL CICLO DE VIDA */}
          {/* DESMONTADO */}
          {/*<ComponentWillUnmount /> */}
          {/* MANEJO DE ERRORES */}
          <ComponentDidCatch />
        </div>
      );
  }
}

export default App;
