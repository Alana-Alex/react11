 import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';

// defining props.
class App extends Component {

//   propTYPES is used to validate props.
//  propTypes: {
//  name: React.PropTypes.string,
//  test: React.PropTypes.string
//  },


    render() {
    // props can be written in two way either in "let name=this.props.name;" inside render function
    let name=this.props.name;
     let test=this.props.test;
     return (
       
       <div className="App">
         <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
         HELLO {name} 
         <p className="App-next">
            LOGIN {test}
            </p>
             {/* or along with the message.  */}

          {/* HELLO  { this.props.name} */}
           {/* LOGIN {this.props.test}  */}
     </p>
       </div>      
     );
    }
 }

 export default App;

