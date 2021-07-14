import React from 'react';
import data from './data.json'
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    let itemsToRender = [];
      data.forEach(data => {
        let beast = <HornedBeast
          title={data.title}
          image_url={data.image_url}
          description={data.description}
        />;
        itemsToRender.push(beast);
      });
    return (
      <main>
        {itemsToRender}
      </main>
    )
  }
}

export default Main;


