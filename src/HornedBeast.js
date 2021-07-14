import React from 'react';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  render(){
    return (
    <>
      <h2>{this.props.title}</h2>
      <img 
      src={this.props.image_url} 
      alt="An animal with a horn" 
      title="Horned Beast" 
      />
      <p>{this.props.description}</p>
    </>
    )
  }
}

export default HornedBeast;
