import React from 'react';
import { Row, Col, Button } from 'antd';

import { ImFacebook2 } from 'react-icons/im';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillGoogleSquare } from 'react-icons/ai';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Login = () => (
  <div className="appLogin">
    <Navbar />
    <Row className="ant-row-center">
      <Col xs={24} sm={18} lg={10}>
        <div className="loginForm">
          <form>
            <h2>Sign In</h2>
            <div>
              <label htmlFor="email">
                <input type="email" className="styledInput" placeholder="Email" name="email" id="email" required />
              </label>
            </div>
            <div className="mt-3">
              <label htmlFor="password">
                <input type="password" className="styledInput" placeholder="Password" name="password" id="password" required />
              </label>
            </div>
            <div className="rememberMeDiv mt-3">
              <div>
                <input type="checkbox" name="rememberMe" />
                <span> Remember me</span>
              </div>
              <div>
                Forgot Password
              </div>
            </div>
            <div className="mt-3">
              <Button type="primary" size="large" block>Login</Button>
            </div>
            <Row className="mt-3 lineDiv">
              <Col span={8}>
                <hr />
              </Col>
              <Col span={8} className="text-center">
                Or Sign In With
              </Col>
              <Col span={8}>
                <hr />
              </Col>
            </Row>
            <div className="iconGroupDiv">
              <Button>
                <ImFacebook2 size={50} color="#3B5998" />
              </Button>
              <Button>
                <FaTwitterSquare size={50} color="#00ACED" />
              </Button>
              <Button>
                <AiFillGoogleSquare size={50} color="#DD4B39" />
              </Button>
            </div>
          </form>
        </div>
        <div className="text-center">
          Don't have an account?
          <span> Sign Up</span>
        </div>
      </Col>
    </Row>
    <Footer />
  </div>
);

export default Login;
