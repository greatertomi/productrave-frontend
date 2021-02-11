import React from 'react';
import { Input, Rate, Row, Col } from 'antd';

import Editor from './Editor';

const CreateComment = () => {
  return (
    <div>
      <div>
        <Editor />
      </div>
      <div className="mt-5">
        <div>Purchase Price</div>
        <Input />
      </div>
      <Row justify="space-around mt-1">
        <Col>
          <div>Durability</div>
          <Rate />
        </Col>
        <Col>
          <div>Usability</div>
          <Rate />
        </Col>
      </Row>
      <div className="mt-3 text-right">
        <div className="ant-btn-link">Suggest new rating</div>
      </div>
    </div>
  );
};

export default CreateComment;
