import React from 'react';
import data from './data.json'
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import './Main.css';

class Main extends React.Component {
  render() {
    let itemsToRender = [];
    data.forEach((beastComponent, index) => {
      let beast = <HornedBeast
        key={index}
        title={beastComponent.title}
        image_url={beastComponent.image_url}
        description={beastComponent.description}
      />;
      itemsToRender.push(beast);
    });
    return (
      <main>
        <CardColumns>
          {itemsToRender}
        </CardColumns>
      </main>
    )
  }
}

export default Main;


