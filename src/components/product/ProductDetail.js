import React, { useState } from 'react';
import { Row, Col, Rate, Button, Modal } from 'antd';

import shoe from '../../images/shoe.jpg';
import ProductComment from './ProductComment';
import CreateComment from './CreateComment';

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
      <div className="mainPageDiv py-2">
        <div className="card">
          <Row gutter={14} className="productMainDetail">
            <Col lg={8} md={10} sm={24}>
              <img src={shoe} alt="product" height="300px" width="300px" />
            </Col>
            <Col lg={12} md={10} sm={24}>
              <h1>Premier Shoe Nike 450s</h1>
              <h3>Categories: Fashion, Sporting Wears</h3>
              <h2>$120</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid atque commodi consequuntur debitis deserunt dolor dolore
                esse explicabo fugit iusto odio quaerat quas quia, quibusdam
                reiciendis sapiente suscipit velit voluptas.
              </div>
              <div className="mt-2 overallRating">
                <div>Overall Rating</div>
                <Rate onChange={handleChange} value={3.5} />
              </div>
            </Col>
            <Col lg={4} md={4} sm={24}>
              <h2 className="mb-2">Ratings</h2>
              <Row justify="space-between">
                <Col lg={24} sm={12}>
                  <div>Durability</div>
                  <Rate onChange={handleChange} allowHalf defaultValue={3.5} />
                </Col>
                <Col lg={24} sm={12}>
                  <div>Accessibility</div>
                  <Rate onChange={handleChange} allowHalf defaultValue={3} />
                </Col>
                <Col lg={24} sm={12}>
                  <div>Cost/Value</div>
                  <Rate onChange={handleChange} allowHalf defaultValue={2} />
                </Col>
                <Col lg={24} sm={12}>
                  <div>Usability</div>
                  <Rate onChange={handleChange} allowHalf defaultValue={5} />
                </Col>
              </Row>
              <div className="mt-3 text-right">
                <div className="ant-btn-link">Follow Category</div>
              </div>
            </Col>
          </Row>
        </div>
        <h2 className="mt-4">Comments</h2>
        <ProductComment />
        <ProductComment />
        <div className="mt-4">
          <Button type="primary" onClick={handleShowModal}>
            Make Comment
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
    </div>
  );
};

export default ProductDetail;
