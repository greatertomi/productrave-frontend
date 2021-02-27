import React, { useEffect } from 'react';
import { Form, Input, Col, Rate, Row, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import PicturesWall from './PicturesWall';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const CreateProduct = () => {
  useEffect(() => {
    document.title = 'ProductRave | Create Product';
  }, []);

  const handleSubmitForm = () => {
    // handle
  };

  const handleFailedSubmit = () => {
    // pass
  };

  handleSubmitForm();
  handleFailedSubmit();

  return (
    <div className="mainPageDiv">
      <div className="mt-4">
        <h1 className="mb-3 text-center">Create Product</h1>
        <Form
          {...layout}
          className="createProductForm"
          initialValues={{ rating: [''] }}
        >
          <Form.Item
            label="Product Name"
            name="productName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Product Description">
            <Input.TextArea />
          </Form.Item>
          <Form.List name="rating">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    name="description"
                    label={`Rating Parameter ${index + 1}`}
                    key={field.key}
                  >
                    <Row gutter={10}>
                      <Col span={20}>
                        <Row gutter={10}>
                          <Col lg={14} xs={24}>
                            <Input />
                          </Col>
                          <Col lg={10} xs={16}>
                            <Rate value="3" />
                          </Col>
                        </Row>
                      </Col>
                      <Col span={4}>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Col>
                    </Row>
                  </Form.Item>
                ))}
                <Form.Item className="specialized">
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ width: '100%' }}
                    icon={<PlusOutlined />}
                  >
                    Add Rating
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <div className="pictureWall">
            <PicturesWall />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateProduct;
