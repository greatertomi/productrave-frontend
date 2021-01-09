import React from 'react';
import {Col, Row} from "antd";
import landingImage from '../images/landing-image.png'

const Landing = () => {
  return (
    <div className='landingBanner'>
     <Row className='landingTop'>
       <Col span={12}>
         <img src={landingImage} alt='' height={500} width={750}/>
       </Col>
       <Col span={12}>
         <h1>Meet your Interest Community</h1>
         <div>You are welcomed to Opinions.</div>
         <div>
           Anyone can download the app and see reviews, but to contribute, you'll need an invite code. Learn more
         </div>
       </Col>
     </Row>
    </div>
  );
};

export default Landing;
