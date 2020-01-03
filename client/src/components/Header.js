import React from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  renderLinks = () => {
    if (this.props.authenticated) {
      return (
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Log-out
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <NavLink className="nav-link" to="/signout">
              Sign-out
            </NavLink>
          </DropdownItem>
          </DropdownMenu>
            </UncontrolledDropdown>
      );
    } else {
      return (
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Log-in
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <NavLink className="nav-link" to="/signin">
              Sign-in
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink className="nav-link" to="/signup">
              Sign-up
            </NavLink>
          </DropdownItem>
          </DropdownMenu>
            </UncontrolledDropdown>
      );
    }
  };

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavLink className="nav-link" to="/">
          AutoLog
        </NavLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </NavItem>
            {this.renderLinks()}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
