import React from 'react';
import {Col, Row} from "antd";
import landingImage from '../images/landing-image.png';
import apple from '../images/apple.jpg';
import google from '../images/google.jpg';
import {BsPeople} from "react-icons/bs";
import {AiOutlineComment, AiOutlineSound} from "react-icons/ai";


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
          <div className='mt-3 downloadIcons'>
            <div>
              <img src={google} height={80} width={200} alt=''/>
            </div>
            <div>
              <img src={apple} height={80} width={200} alt=''/>
            </div>
          </div>
        </Col>
      </Row>
      <div className='joinOpinionDiv'>
        <h1 className='text-center mb-3'>Join Opinions</h1>
        <Row className='ant-row-center text-center' gutter={30}>
          <Col span={8}>
            <AiOutlineSound color='#1172FF' fontSize={80}/>
            <h2>Stay up-to-date</h2>
            <div>
              See all products in one place. Follow brands or
              categories you care about and get notified when
              something new gets released.
            </div>
          </Col>
          <Col span={8}>
            <AiOutlineComment color='#33AA7A' fontSize={80}/>
            <h2>Review Products</h2>
            <div>
              Let the world know what you like or dislike about
              the products you own. Real feedback from real owners
              is what we're all about.
            </div>
          </Col>
          <Col span={8}>
            <BsPeople color='#FFC400' fontSize={80}/>
            <h2>Join the Community</h2>
            <div>
              Discuss products, vote on your favorites, build
              your profile, and see what others like. Opinions is
              where the discussion happens.
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Landing;
