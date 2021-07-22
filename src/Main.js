import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import './Main.css';

class Main extends React.Component {

  handleChange = e => {
    const numOfHorns = parseInt(e.target.value);
    if (numOfHorns) {
      this.props.data.filter(beast => beast.horns === numOfHorns);
    }
    // Filter over the data for each indv. beast
    // let filteredItems = 
    // Comparing the beast horns to the value of the onChange
    // console.log(numOfHorns);
  }

  render() {
    let itemsToRender = this.props.data.map((beastObjectFromData, index) =>
      <HornedBeast
        key={index}
        handleShowModal={this.props.handleShowModal}
        beast={beastObjectFromData}
      />
    );
    return (
      <main>
        <h3>Click any image to display the description!</h3>
        <form>
          <label>View beasts by the number of horns
            <select name="horns" id="horns" onChange={this.handleChange}>
              <option>Select an Option</option>
              <option value="all">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </select>
          </label>
        </form>
        <CardColumns>
          {itemsToRender}
        </CardColumns>
      </main>
    )
  }
}

export default Main;


