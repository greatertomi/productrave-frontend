import React from 'react';
import { Button, Col, Row } from 'antd';
import { ImFacebook2 } from 'react-icons/im';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillGoogleSquare } from 'react-icons/ai';
import OldNavbar from '../layout/OldNavbar';
import Footer from '../layout/Footer';

const Register = () => (
  <div className="appLogin">
    <OldNavbar />
    <Row className="ant-row-center">
      <Col xs={24} sm={18} lg={10}>
        <div className="loginForm">
          <form>
            <h2>Sign Up</h2>
            <div>
              <label htmlFor="fullname">
                <input
                  type="text"
                  className="styledInput"
                  placeholder="Fullname"
                  name="fullname"
                  id="fullname"
                  required
                />
              </label>
            </div>
            <div className="mt-3">
              <label htmlFor="email">
                <input
                  type="email"
                  className="styledInput"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                />
              </label>
            </div>
            <div className="mt-3">
              <label htmlFor="password">
                <input
                  type="password"
                  className="styledInput"
                  placeholder="Password"
                  name="password"
                  id="password"
                  required
                />
              </label>
            </div>
            <div className="mt-3">
              <label htmlFor="password2">
                <input
                  type="password"
                  className="styledInput"
                  placeholder="Confirm Password"
                  name="password2"
                  id="password2"
                  required
                />
              </label>
            </div>
            <div className="mt-3">
              <Button type="primary" size="large" block>
                Register
              </Button>
            </div>
            <Row className="mt-3 lineDiv">
              <Col span={8}>
                <hr />
              </Col>
              <Col span={8} className="text-center">
                Or Sign Up With
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
          You already have an account?
          <span> Sign In</span>
        </div>
      </Col>
    </Row>
    <Footer />
  </div>
);

export default Register;
