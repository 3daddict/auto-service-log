import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SettingsGroup extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onEditClick = () => {
    this.props.handleEditClick();
  };

  onDeleteClick = () => {
    this.props.handleDeleteClick();
  };
  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret outline color="info">
          <FontAwesomeIcon icon="cogs" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className="text-danger" onClick={this.onDeleteClick}>Delete</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.onEditClick}>Edit</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
