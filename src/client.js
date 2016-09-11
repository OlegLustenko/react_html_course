import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

// import App from './components/app';


// class App extends React.Component {
//   constructor(){
//     super();
//   }
//   render() {
//     return <div>React App net</div>
//   }
// }

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