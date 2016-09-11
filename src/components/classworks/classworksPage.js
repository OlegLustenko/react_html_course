import React, {Component} from 'react';
import {Link} from 'react-router';

export default class homeworkPage extends Component {
  render() {
    return (
      <div>
        <Link to="classwork/1">Classworks 1</Link>
        {this.props.children}
      </div>
    );
  }
}