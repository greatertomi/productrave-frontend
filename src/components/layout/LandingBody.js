import React from 'react';
import { Col, Row } from 'antd';
import { BsPeople } from 'react-icons/bs';

import { AiOutlineComment, AiOutlineSound } from 'react-icons/ai';
import { FcFeedback, FcIcons8Cup, FcHighPriority } from 'react-icons/fc';

import landingImage from '../../images/landing-image.png';

const LandingBody = () => (
  <div className="landingBanner">
    <Row className="landingTop" gutter={{ xs: 0, sm: 8, md: 24 }}>
      <Col lg={12} sm={24} className="pr-3">
        <img src={landingImage} alt="Landing" className="landingImg" />
      </Col>
      <Col lg={12} sm={24} className="pl-3">
        <h1>Meet your Interest Community</h1>
        <div className="mainText mt-3">You are welcomed to ProductRave.</div>
        <div className="mainText">
          <div className="mb-3">
            We are here for two reasons. We believe amazing products are worth
            shouting about. We make amazing products popular.
          </div>
          <div>
            We help you make better decision about the products you own and will
            own by combining human and artificial intelligence.
          </div>
        </div>
      </Col>
    </Row>
    <div className="joinOpinionDiv">
      <h1 className="mb-3">Join ProductRave</h1>
      <Row className="ant-row-center" gutter={30}>
        <Col lg={8} md={12} sm={24} className="landingCol">
          <AiOutlineSound color="#1172FF" fontSize={80} />
          <h2>Stay up-to-date</h2>
          <div>
            See all products in one place. Follow brands or categories you care
            about and get notified when something new gets released.
          </div>
        </Col>
        <Col lg={8} md={12} sm={24} className="landingCol">
          <AiOutlineComment color="#33AA7A" fontSize={80} />
          <h2>Review Products</h2>
          <div>
            Let the world know what you like or dislike about the products you
            own. Real feedback from real owners is what we're all about.
          </div>
        </Col>
        <Col lg={8} md={12} sm={24} className="landingCol">
          <BsPeople color="#FFC400" fontSize={80} />
          <h2>Make Better Decisions</h2>
          <div>
            Discuss products, vote on your favorites, build your profile, see
            what others like and get product suggestion from real people and AI.
          </div>
        </Col>
      </Row>
    </div>
    <div className="writeToUsDiv">
      <div className="mb-3">
        <h1>Get in touch</h1>
        <h3>We'd love to hear from you</h3>
      </div>
      <div>
        <div>
          <FcHighPriority fontSize={80} />
          <h2>Report a bug</h2>
        </div>
        <div>
          <FcFeedback fontSize={80} />
          <h2>Write to us</h2>
        </div>
        <div>
          <FcIcons8Cup fontSize={80} />
          <h2>Buy me a coffee</h2>
        </div>
      </div>
    </div>
  </div>
);

export default LandingBody;
