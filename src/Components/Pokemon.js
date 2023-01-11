import React from 'react';
import ReactDOM from 'react-dom';

class Pokemon extends React.Component {
    render() {
      return (
        <div className="PokemonContainer">      
          {this.props.data && (
            <img src={this.props.data.sprites.front_default} />
          )}
        </div>
      );
    }
  }
  
  export default Pokemon;
  