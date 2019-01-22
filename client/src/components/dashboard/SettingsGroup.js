import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SettingsGroup extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
	  modal: false,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggleModal = () => {
	  this.setState({
		modal: !this.state.modal,
	  })
  }

  onEditClick = () => {
    this.props.handleEditClick();
  };

  onDeleteClick = () => {
    this.setState({
      modal: !this.state.modal
	});
	
	this.props.handleDeleteClick();
  };

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret outline color="info">
          <FontAwesomeIcon icon="cogs" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className="text-danger" onClick={this.toggleModal}>Delete</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.onEditClick}>Edit</DropdownItem>
        </DropdownMenu>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
			<ModalHeader toggle={this.toggleModal}>
				<span className="text-danger">WARNING: </span>
			</ModalHeader>
          <ModalBody>
            <p className="text-center">Are you sure you want to delete this Vehicle?</p>
			<div className="text-center">
				<Button className="mt-2" color="danger" onClick={this.onDeleteClick}>Delete</Button>
			</div>
          </ModalBody>
        </Modal>
      </ButtonDropdown>
    );
  }
}
