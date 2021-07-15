import React from 'react';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favoriteNum: 0,
      showHeart: false,
    };
  }

  favoriteCounter = () => {
    this.setState({
      favoriteNum: this.state.favoriteNum + 1,
    })
  }

  heart = () => {
    this.setState({
      showHeart: true,
    });
  }

  render(){
    return (
    <article className="beast">
      <h2>{this.props.title}</h2>
      <img 
      onClick={() => {
        this.heart()
        this.favoriteCounter()
      }}
      src={this.props.image_url} 
      alt="An animal with a horn" 
      title="Horned Beast" 
      />
      <p>{this.state.showHeart ? '❤️ ' : ''}{this.state.favoriteNum}</p>
      <p>{this.props.description}</p>
    </article>
    );
  }
}

export default HornedBeast;
