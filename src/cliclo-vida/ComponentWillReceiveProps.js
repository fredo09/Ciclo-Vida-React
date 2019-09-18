/** CICLO DE VIDA DE REACT FASE DE ACTUALIZACION */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    cat: 'https://www.purina.es/gato/purina-one/sites/g/files/mcldtz1856/files/2018-06/Mi_gato_no_come%20%282%29.jpg',
    panda: 'https://www.nationalgeographic.com.es/medio/2018/02/27/panda__1280x720.jpg',
    dolphin: 'https://www.areadelfines.com/Imagenes/delfin-comun-o-delphinus-delphis.jpg'
}

const ANIMAL = Object.keys(ANIMAL_IMAGES);

  
class AnimalImage extends PureComponent {
    state = { src: ANIMAL_IMAGES[this.props.animal] }
    
    // Se ejecuta para ver cuando nos llegen nuevas props
    UNSAFE_componentWillReceiveProps(nextProps){
        //console.log(this.state);
        console.log('1.ComponentWillReceiveProps');
        // console.log('Props que recibo: ' , nextProps);
        this.setState({ src : ANIMAL_IMAGES[nextProps.animal] });
        // console.log(this.state.src);
    }
    
    //Evitamos ejecutar el render de actualizado cuando es necesario ademas de que se 
    //agrega por defecto cuando usamos el tipo de componente PURE.COMPONENT
   /* shouldComponentUpdate = (nextProps) => {
        console.log('2.ShouldComponentUpdate');
        console.log('Props que tengo: ' ,this.props.animal);
        console.log('Props que recibo: ' , nextProps.animal);
        return this.props.animal !== nextProps.animal; // regresa true cuando las props no son iguales y vuelve a ejecutar el render
    }*/
    // se usa para agregar animaciones 
    //ademas si el metodo shouldComponentUpdate regresa false este se ejecuta
    UNSAFE_componentWillUpdate = (nextProps, nextState) => {
        console.clear();
        console.log('3.ComponentWillUpdate');
        console.log(`State que tengo: ${this.state.src}. Y props que tengo ${this.props.animal}`);
        console.log('Props que recibo: ' ,nextProps);
        console.log('State que recibo: ', nextState);
        const img = document.querySelector('img')
        console.log('from img element', { alt: img.alt })
        // web animations api
        img.animate([ {
        filter: 'blur(0px)'
        }, {
        filter: 'blur(2px)'
        }], {
        duration: 500,
        easing: 'ease'
        })
    }
    
    // se usa para hacer llamadas externas o manipular el dom 
    // despues de que este se renderize con la actualizacion
    componentDidUpdate = (nextProps, nextState) => {
        console.log('4. componentDidUpdate');
        const img = document.querySelector('img')
        console.log('from img element', { alt: img.alt })
        // web animations api
        img.animate([ {
        filter: 'blur(2px)'
        }, {
        filter: 'blur(0px)'
        }], {
        duration: 1500,
        easing: 'ease'
        })
        console.log('from img element en componentDidUpdate', { alt: img.alt })
    }

    render () {
      console.log('-> render')
      // console.log(this.state);
      return (
        <div>
          <p>Selected {this.props.animal}</p>
          <img
            alt={this.props.animal}
            src={this.state.src}
            width='450'
          />
        </div>
      )
    }
}

AnimalImage.propTypes = {
    animal : PropTypes.oneOf(ANIMAL)
}

class ComponentWillReceiveProps extends React.Component{
    constructor(props){
        super(props);
        //console.log('constructor');
        this.state = { animal: 'cat' }
    }

    _renderButtonAnimal = ( animal ) => {
        //console.log('_render_botton ', animal);
        return (
            <button 
            // disabled={animal === this.state.animal}
            key={animal} 
            onClick={() => this.setState({ animal }) } >
                {animal}
            </button>
        );
    }

    render(){
        // console.log(ANIMAL);
        return(
            <div>
                Compoenente /*ComponentWillReceiveProps*/ ShouldComponentUpdate
                <AnimalImage animal={this.state.animal}/>
                {ANIMAL.map( this._renderButtonAnimal )}
            </div>
        );
    }
}

export default ComponentWillReceiveProps;