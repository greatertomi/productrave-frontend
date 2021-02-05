import React from 'react';
import './styles/App.scss';
import './styles/utilities.scss';
import './styles/product.scss';
// import CreateProduct from './components/product/CreateProduct';
// import DashboardLanding from './components/dashboard/DashboardLanding';
import ProductDetail from './components/product/ProductDetail';
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// import Landing from './components/layout/Landing';

const App = () => (
  <div className="App">
    {/* <Landing /> */}
    {/* <Login /> */}
    {/* <Register /> */}
    {/* <DashboardLanding /> */}
    <ProductDetail />
    {/* <CreateProduct /> */}
  </div>
);

export default App;
