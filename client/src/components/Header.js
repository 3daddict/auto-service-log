import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
		<Navbar color="light" light expand="md">
			<NavbarBrand href="/">AutoLog</NavbarBrand>
			<NavbarToggler onClick={this.toggle} />
			<Collapse isOpen={this.state.isOpen} navbar>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink href="/contact/">Contact</NavLink>
					</NavItem>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Log-in
                </DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>
								Sign-in
                  </DropdownItem>
							<DropdownItem divider />
							<DropdownItem>
								Sign-up
                  </DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
			</Collapse>
		</Navbar>
    );
  }
}