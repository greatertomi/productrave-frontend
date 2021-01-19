import React from 'react';
import {Col, Row} from "antd";
import landingImage from '../images/landing-image.png'

const Landing = () => {
  return (
    <div className='landingBanner'>
     <Row className='landingTop' gutter={{ xs: 8, sm: 16, md: 24}}>
       <Col lg={12} sm={24} className='pr-3'>
         <img src={landingImage} alt='' className='landingImg' height={350} width={500}/>
       </Col>
       <Col lg={12} sm={24} className='pl-3'>
         <h1>Meet your Interest Community</h1>
         <div className='mainText mt-3'>You are welcomed to Opinions.</div>
         <div className='mainText'>
           Anyone can download the app and see reviews, but to contribute, you'll need an invite code. Learn more
         </div>
       </Col>
     </Row>
    </div>
  );
};

export default Landing;
