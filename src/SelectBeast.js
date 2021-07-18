import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectBeast extends React.Component {


  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>
          <img
            src={this.props.beast.image_url}
            alt={this.props.beast.description}
            title={this.props.beast.title}
          />
          <Modal.Body>{this.props.beast.description}</Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectBeast;
