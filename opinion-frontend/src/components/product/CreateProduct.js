import React from 'react';
import { Form, Input, Select } from 'antd';
import DynamicFieldSet from './DynamicFieldSet';

const CreateProduct = () => {
  const handleSubmitForm = () => {
    // handle
  };

  const handleFailedSubmit = () => {
    // pass
  };

  handleSubmitForm();

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleSubmitForm}
      onFinishFailed={handleFailedSubmit}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="cat1">Category 1</Select.Option>
          <Select.Option value="cat2">Category 2</Select.Option>
        </Select>
      </Form.Item>
      <DynamicFieldSet />
    </Form>
  );
};

export default CreateProduct;
