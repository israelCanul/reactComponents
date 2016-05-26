import React from 'react';
import ReactDOM from 'react-dom';

class MyComp extends React.Component {  
  render() {
      return <img className="media-object" width="64px" src={`http://taller-angular.carlosazaustre.es/asset/${this.props.picture}`} />
      
  }
}

ReactDOM.render(<MyComp />, document.getElementById('form-contact-react'))