import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class TopBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              BITCOIN BUY
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem componentClass={Link} href="/orders" to="/orders" eventKey={1}>
            Orders
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
};

export default TopBar;