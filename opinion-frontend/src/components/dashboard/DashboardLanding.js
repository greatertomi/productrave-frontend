import React from 'react';
import { Carousel, Col, Row } from 'antd';
import Navbar from '../layout/Navbar';
import advert1 from '../../images/advert1.png';
import advert2 from '../../images/advert2.png';
import advert3 from '../../images/advert3.png';
import advert4 from '../../images/advert4.png';
import advert5 from '../../images/advert5.jpg';
import CategoryBar from './CategoryBar';
import Footer from '../layout/Footer';

const DashboardLanding = () => (
  <div>
    <Navbar />
    <div className="mainPageDiv">
      <div className="topBarCard">
        <Row>
          <Col span={7} className="hideSm">
            <ul>
              <li>Health & Beauty</li>
              <li>Fashion</li>
              <li>Phone and Tablet</li>
              <li>Computing</li>
              <li>Gaming</li>
              <li>Home and Office</li>
              <li>Automobile</li>
              <li>Sporting Goods</li>
              <li>Others</li>
            </ul>
          </Col>
          <Col sm={24} md={16}>
            <Carousel autoplay className="carousel">
              <div>
                {/* <h3 style={contentStyle}>1</h3> */}
                <img src={advert1} alt="Advert 1" />
              </div>
              <div>
                <img src={advert2} alt="Advert 2" />
              </div>
              <div>
                <img src={advert3} alt="Advert 3" />
              </div>
              <div>
                <img src={advert4} alt="Advert 4" />
              </div>
              <div>
                <img src={advert5} alt="Advert 5" />
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>
      <CategoryBar title="New Arrival" cardNum={5} />
      <CategoryBar title="Trending" cardNum={5} />
      <CategoryBar title="Popular Categories" cardNum={5} />
      <CategoryBar title="Suggestions" cardNum={5} />
    </div>
    <Footer />
  </div>
);

export default DashboardLanding;
