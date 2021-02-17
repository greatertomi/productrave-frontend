import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/app.scss';
import './styles/utilities.scss';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/layout/Nav/Navbar';
import Footer from './components/layout/Footer';
import DashboardLanding from './components/dashboard/DashboardLanding';
import ProductDetail from './components/product/ProductDetail';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={DashboardLanding} />
      <Route path="/product-detail" exact component={ProductDetail} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
