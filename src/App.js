import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json'
import SelectBeast from './SelectBeast';
import './App.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      beast: {},
    };
  }

  handleShowModal = (beast) => {
    this.setState({
      showModal: true,
      beast: beast,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  }
  render() {
    return (
      <>
        <Header />
        <Main data={data} handleShowModal={this.handleShowModal}/>
        <Footer />
        <SelectBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} beast={this.state.beast}/>
      </>
    )
  }
}

export default App;
