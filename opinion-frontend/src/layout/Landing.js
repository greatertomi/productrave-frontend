import React from 'react';
import {Col, Row} from "antd";
import landingImage from '../images/landing-image.png'

const Landing = () => {
  return (
    <div>
     <Row className='landingTop'>
       <Col span={12}>
         <img src={landingImage}/>
       </Col>
       <Col span={12}>
         You are welcomed to Opinions.
       </Col>
     </Row>
    </div>
  );
};

export default Landing;
