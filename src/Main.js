import React from 'react';
import moose from './MOOSE.jpg';
import bullCaribou from './Bull-Caribou.jpg' 
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
          title="Moose"
          imgURL={moose}
          description="Moose are the largest deer species that inhabit in the Northern Hemisphere."
        />
        <HornedBeast
          title="Caribou"
          imgURL={bullCaribou}
          description="Caribou also called as reindeer that found across North America, Europe and Asia."
        />
      </main>
    )
  }
}

export default Main;

