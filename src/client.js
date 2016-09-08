import React from 'react';
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router';
import AppRoutes from './components/AppRoutes';

// import App from './components/app';

window.onload = () => {
  ReactDOM.render(<AppRoutes />, document.querySelector('.container'));
}



// export default class AppRoutes extends React.Component {
//   render() {
//     return (
//       <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0) }/>
//     );
//   }
// }