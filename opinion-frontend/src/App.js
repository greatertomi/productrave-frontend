import React from 'react';
import './styles/App.scss';
import './styles/utilities.scss';
import Login from './components/auth/Login';
// import Landing from './components/layout/Landing';

const App = () => (
  <div className="App">
    {/* <Landing /> */}
    <Login />
  </div>
);

export default App;
