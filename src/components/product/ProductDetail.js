import React, { useState } from 'react';
import { Row, Col, Rate, Button, Modal } from 'antd';

import shoe from '../../images/shoe.jpg';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ProductComment from './ProductComment';
import CreateComment from './CreateComment';
// import Editor from './Editor';

const ProductDetail = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleChange = () => {
    console.log('Update rating');
  };

  return (
    <div>
      <Navbar />
      <div className="mainPageDiv">
        <div className="card py-2">
          <Row gutter={14}>
            <Col span={8}>
              <img src={shoe} alt="product" height="300px" width="300px" />
            </Col>
            <Col span={10}>
              <h1>Premier Shoe Nike 450s</h1>
              <h3>Categories: Fashion, Sporting Wears</h3>
              <h2>$120</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid atque commodi consequuntur debitis deserunt dolor dolore
                esse explicabo fugit iusto odio quaerat quas quia, quibusdam
                reiciendis sapiente suscipit velit voluptas.
              </div>
              <div className="mt-2">
                <div>Overall Rating</div>
                <Rate onChange={handleChange} value={3.5} />
              </div>
            </Col>
            <Col span={6}>
              <h2 className="mb-2">Ratings</h2>
              <div>
                <div>Durability</div>
                <Rate onChange={handleChange} allowHalf defaultValue={3.5} />
              </div>
              <div>
                <div>Accessibility</div>
                <Rate onChange={handleChange} allowHalf defaultValue={3} />
              </div>
              <div>
                <div>Cost/Value</div>
                <Rate onChange={handleChange} allowHalf defaultValue={2} />
              </div>
              <div>
                <div>Usability</div>
                <Rate onChange={handleChange} allowHalf defaultValue={5} />
              </div>
              <div className="mt-3 text-right">
                <div className="ant-btn-link">Follow Category</div>
              </div>
            </Col>
          </Row>
        </div>
        <h2 className="mt-4">Comments</h2>
        <ProductComment />

        <div className="mt-4">
          <Button type="primary" onClick={handleShowModal}>
            Show Modal
          </Button>
        </div>
      </div>

      <Modal
        title="Share your thought"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleHideModal}
      >
        <CreateComment />
      </Modal>
      <Footer />
    </div>
  );
};

export default ProductDetail;
