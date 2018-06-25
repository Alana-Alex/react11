// import React, {Component} from 'react'; 

// import { Navbar } from 'react-bootstrap'; 
// import { NavLink, Link } from 'react-router-dom'; 
// import logo from '../logo.svg';


// export default class SimpleNavbar extends React.Component {

//     constructor() {
//         super(); 
//         this.myFunction = this.myFunction.bind(this); 
//     }

// /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
//   myFunction() {
//         var x = document.getElementById("myTopnav");
//         if (x.className === "topnav") {
//             x.className += " responsive";
//         } else {
//             x.className = "topnav";
//         }
//     }

//     render(){
//         return (
//             <div className="topnav" id="myTopnav">
//                 <NavLink to="/" exact    activeClassName="activeNavLink"> MyComp </NavLink> 
                 
//                 <a className="icon" onClick={this.myFunction}>
//                    <i className="fa fa-bars"></i>
//                 </a>
//             </div> 
//         )
//     }
// }

<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;