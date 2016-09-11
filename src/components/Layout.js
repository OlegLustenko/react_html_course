import React, {Component} from 'react';
import {Link} from 'react-router';
import App from './IndexPage';

let Navigation = ({db}) => (
  <nav>
    {db.map(hw => <Link to={`homework/${hw.id}`} key={hw.id}>{hw.theme} </Link>) }
  </nav>
);

class Layout extends Component {
  render() {
    // console.log(this.props.children)
    return (
      <div className="app-container">
        <header>
         <nav className="vertical">
            <Link to="/">
              Home page
            </Link>
            <div className="home">
              <Link to="themes/homework">Home work </Link>              
            </div>
          <div className="home">     
            <Link to="classwork">Class work </Link>        
          </div>
        </nav>
        </header>
          <div className="app-content">{this.props.children}</div>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

export default Layout;
