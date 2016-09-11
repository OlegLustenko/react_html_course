'use strict';

import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import HomeworkPage from './components/homeworks/homeworksPage';
import ClassworkPage from './components/classworks/classworksPage';
import {homeWorkDB, classWorkDB} from './data';

// import AthletePage from './components/AthletePage';
// import NotFoundPage from './components/NotFoundPage';

class ClassWork extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>ClassWork: DADADA</div>
    )
  }
}



class HomeWork extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="homework-selectors left">
          <Link to="/homework/1">
            <br />Homework NUMBER 1
          </Link>
          <Link to="/homework/1">
            <br />Homework NUMBER 2
          </Link>
          {this.props.children}
        </div>
      </div>
    );
  }
}

let Navigation = ({ db, theme } = {...props }) => {
  // console.log(props);
  return (
    <nav>
      {db.map(hw => <Link to={`themes/${theme}/${hw.id}`} key={hw.id}>{hw.theme} </Link>) }
    </nav>
  )
};

class Themes extends React.Component {
  render() {
    return (
      <div>
        <Navigation db={homeWorkDB} theme='homework'/>
        <Navigation db={classWorkDB} theme='classwork'/>
        {this.props.children}
      </div>
    )
  }
}

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="themes" component={Themes}>
      <Route path="classwork" component={ClassworkPage}>
        <Route path=":id" component={ClassWork} />
      </Route>
      <Route path="homework" component={HomeWork}>
        <Route path=":id" component={HomeworkPage}/>
      </Route>
    </Route>
  </Route>
);

export default routes;
