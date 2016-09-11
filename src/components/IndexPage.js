import React, {Component} from 'react';
import {Link} from 'react-router';


// import One from './homeworks/1'; 
// console.log(require('./homeworks/1').default)
// console.log(One);

class App extends Component {
  // <div className="app-content">{this.props.children}</div>
  render() {
    // console.log(this.props.children)
    // <div className="home">
    //   <Link to="homework">Home work </Link>
    // </div>
    // <div className="home">     
    //   <Link to="classwork">Class work </Link>        
    // </div>
    // console.log(homeWorkDB);
    return (
      <div>
        <div className="homework-selectors left">         
          <Link to="/homework">
            <br />Homework
          </Link>
        </div>
      </div>
    );
  }
}


export default App;
