import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beastData: this.props.data,
    }
  }
  handleChange = e => {
    let beastData = this.props.data
    let numOfHorns = parseInt(e.target.value);
    if (numOfHorns) {
      beastData = beastData.filter(beast => beast.horns === numOfHorns);
    }
    this.setState({
      beastData: beastData,
    })
  }

  render() {
    let itemsToRender = this.state.beastData.map((beastObjectFromData, index) =>
      <HornedBeast
        key={index}
        handleShowModal={this.props.handleShowModal}
        beast={beastObjectFromData}
      />
    );
    return (
      <main>
        <h3>Click any image to display the description!</h3>
        <Form>
          <Form.Label>View beasts by the number of horns!
            <Form.Control as="select" custom onChange={this.handleChange}>
              <option>Select an Option</option>
              <option value="0">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Label>
        </Form>
        <CardColumns>
          {itemsToRender}
        </CardColumns>
      </main>
    )
  }
}

export default Main;


