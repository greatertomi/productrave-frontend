import React from 'react';
import './styles/App.scss';
import './styles/utilities.scss';
import DashboardLanding from './components/dashboard/DashboardLanding';
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// import Landing from './components/layout/Landing';

const App = () => (
  <div className="App">
    {/* <Landing /> */}
    {/* <Login /> */}
    {/* <Register /> */}
    <DashboardLanding />
  </div>
);

export default App;
