import React from 'react';
import './styles/App.scss';
import './styles/utilities.scss';
import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// import Landing from './components/layout/Landing';

const App = () => (
  <div className="App">
    {/* <Landing /> */}
    {/* <Login /> */}
    <Register />
  </div>
);

export default App;
