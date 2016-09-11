import React, {Component} from 'react';


export default class homeworkPage extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <div>Homework 1</div>
        <div>Homework 2</div>
        <div>Homework 3</div>
      </div>
    );
  }
}