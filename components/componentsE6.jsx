import React from 'react'

class MyComp extends React.Component {  
  render() {
      return <img className="media-object" width="64px" src={`http://taller-angular.carlosazaustre.es/asset/${this.props.picture}`} />
      
  }
}

React.render(<MyComp />, document.getElementById('form-contact-react'))