import { Form, Input, Button } from 'antd';
import * as Styled from 'modules/auth/containers/Login/components/Styled';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const LoginPage = ({ login }) => {
  const onFinish = (formData) => {
    login(formData);
  }

  return (
    <Styled.Layout>
      <Form
        style={{ width: '600px'}}
        {...layout}
        name="basic"
        onFinish={onFinish}
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>


        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
        </Form.Item>
      </Form>
    </Styled.Layout>
  );
};