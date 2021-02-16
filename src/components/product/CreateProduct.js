import React from 'react';
import { Form, Input, Select, Col, Rate, Row, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import OldNavbar from '../layout/OldNavbar';
import PicturesWall from './PicturesWall';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const CreateProduct = () => {
  const handleSubmitForm = () => {
    // handle
  };

  const handleFailedSubmit = () => {
    // pass
  };

  handleSubmitForm();
  handleFailedSubmit();

  return (
    <div>
      <OldNavbar />
      <div className="mt-4">
        <h3 className="mb-3 text-center">Create Product</h3>
        <Form {...layout} className="createProductForm">
          <Form.Item
            label="Product Name"
            name="productName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.List name="categories">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    label={index <= 1 ? 'Category' : 'Categories'}
                    required={false}
                    key={field.key}
                  >
                    <Row gutter={5}>
                      <Col span={fields.length > 1 ? 20 : 24}>
                        <Form.Item>
                          <Select>
                            <Select.Option value="cat1">
                              Category 1
                            </Select.Option>
                            <Select.Option value="cat2">
                              Category 2
                            </Select.Option>
                          </Select>
                        </Form.Item>
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
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ width: '60%' }}
                    icon={<PlusOutlined />}
                  >
                    Add Category
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item name="description" label="Product Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="description" label="Rating Parameter">
            <Row gutter={16}>
              <Col span={16}>
                <Input />
              </Col>
              <Col span={8}>
                <Rate value="3" />
              </Col>
            </Row>
          </Form.Item>
          <div>
            <PicturesWall />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateProduct;
