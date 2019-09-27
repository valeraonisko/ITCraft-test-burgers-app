import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default class Header extends Component {

  render () {
    const { burgerSelected, userName } = this.props;

    const menuItem = (<NavLink to="/" className="nav-link" activeClassName="active">Burger menu</NavLink>);

    const burgerItem = burgerSelected ?
       (<NavLink to="/burger" className="nav-link" activeClassName="active">{burgerSelected.title}</NavLink>) : null;
    const burgerNavItem = burgerSelected ? (<NavItem>{burgerItem}</NavItem>) : null;

    const orderItem = (<NavLink to="/order" className="nav-link" activeClassName="active">Order</NavLink>);
    const userItem = (<NavLink to="/logout" className="nav-link" activeClassName="active">{userName}</NavLink>);

    return (
      <header className="main-header">
        <Navbar expand="md" color="dark" dark>
          <Nav navbar className="mr-auto">
            <NavbarBrand href="/">Burgers</NavbarBrand>
            <NavItem>
              {menuItem}
            </NavItem>
              {burgerNavItem}
            <NavItem>
              {orderItem}
            </NavItem>
          </Nav>
          <Nav navbar right="true">
            <NavItem>
              {userItem}
            </NavItem>
          </Nav>

        </Navbar>
      </header>
    );
  }

}
