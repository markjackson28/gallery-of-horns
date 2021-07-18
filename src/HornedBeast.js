import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
        <Card.Title>{this.props.beast.title}</Card.Title>
        <Card.Img
          onClick={() => {
            this.props.handleShowModal(this.props.beast);
          }}
          src={this.props.beast.image_url}
          alt={this.props.beast.description}
          title={this.props.beast.title}
        />
        <Card.Text>{this.state.showHeart ? '❤️ ' : ''}{this.state.favoriteNum ? this.state.favoriteNum : ''}</Card.Text>
        <Button onClick={() => {
          this.heart();
          this.favoriteCounter();
        }}>Favorite
        </Button>
      </Card>
    );
  }
}

export default HornedBeast;
