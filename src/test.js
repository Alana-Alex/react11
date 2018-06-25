// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Amex from './American-Express-Symbol.jpg';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import edit from './edit';
// import editTwo from './editTwo';
// import { Bootstrap, Navbar, NavDropdown, NavItem, Nav, MenuItem } from 'react-bootstrap';
// import grid from './grid';

// class App extends Component {
//   render() {
//     return (
//       <div  >
//         <header className="App-header">
//           <img src={logo} src={Amex} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to Amex</h1>
//         </header>

//         <Navbar inverse collapseOnSelect>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#brand">React-Bootstrap</a>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//           </Navbar.Header>
//           <Navbar.Collapse>
//             <Nav>
//               <NavItem eventKey={1} href="#">
//                 Link
//       </NavItem>
//               <NavItem eventKey={2} href="#">
//                 Link
//       </NavItem>
//               <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//                 <MenuItem eventKey={3.1}>Action</MenuItem>
//                 <MenuItem eventKey={3.2}>Another action</MenuItem>
//                 <MenuItem eventKey={3.3}>Something else here</MenuItem>
//                 <MenuItem divider />
//                 <MenuItem eventKey={3.3}>Separated link</MenuItem>
//               </NavDropdown>
//             </Nav>
//             <Nav pullRight>
//               <NavItem eventKey={1} href="#">
//                 Link Right
//       </NavItem>
//               <NavItem eventKey={2} href="#">
//                 Link Right
//       </NavItem>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>

//         <Router>
//           <div>
//             <button className="buttonStyle">
//               Delete
//           </button>
//             <Link to="/t">
//               <button className="buttonStyle">

//                 Edit
//           </button>
//             </Link>
//             <Route exact path='/' component={edit} />
//             <Route path='/t' component={editTwo} />
//           </div>
//         </Router>
//         <Router>
         
//           <Route path= '/grid' component={grid}/>
//           </Router>

//       </div>

//     );
//   }
// }

// export default App;

