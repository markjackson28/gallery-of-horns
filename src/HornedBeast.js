import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
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

  render() {
    return (
      <Card className="beast">
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img variant="bottom"
          onClick={() => {
            this.heart()
            this.favoriteCounter()
          }}
          src={this.props.image_url}
          alt="An animal with a horn"
          title="Horned Beast"
        />
        <Card.Text>{this.state.showHeart ? '❤️ ' : ''}{this.state.favoriteNum ? this.state.favoriteNum : ''}</Card.Text>
        <Card.Text>{this.props.description}</Card.Text>
      </Card>
    );
  }
}

export default HornedBeast;
