import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default class Header extends Component {

  render () {
    const { burgerSelected } = this.props;

    const menuItem = (<NavLink exact to="/" className="nav-link" activeClassName="active">Burger menu</NavLink>);

    const burgerItem = burgerSelected ?
       (<NavLink exact to="/burger" className="nav-link" activeClassName="active">{burgerSelected.title}</NavLink>) : null;
    const burgerNavItem = burgerSelected ? (<NavItem>{burgerItem}</NavItem>) : null;

    const orderItem = (<NavLink exact to="/order" className="nav-link" activeClassName="active">Order</NavLink>);

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
        </Navbar>
      </header>
    );
  }

}
