import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import './Main.css';

class Main extends React.Component {
  render() {
    let itemsToRender = this.props.data.map((beastObjectFromData, index) => <HornedBeast
      key={index}
      handleShowModal={this.props.handleShowModal}
      beast={beastObjectFromData}
    // title={beastObjectFromData.title}
    // image_url={beastObjectFromData.image_url}
    // description={beastObjectFromData.description}
    />
    );
    return (
      <main>
        <h3>Click any image to display the description!</h3>
        <CardColumns>
          {itemsToRender}
        </CardColumns>
      </main>
    )
  }
}

export default Main;


