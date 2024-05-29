import React from "react";
import { Alert,Spin,Card, Flex, Form, Typography, Input, Button } from "antd";
import { Link } from "react-router-dom"; // Change this line
import p2 from "../assets/p2.jpg";
import useLogin from "../hooks/useLogin";

function Login() 
{
  const {error,loading,loginUser} = useLogin();
  const handleLogin = async (values) =>{
    await loginUser(values);
  }
  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* Image Section Starts here */}
        <Flex flex={1}>
          <img src={p2} className="auth-image" />
        </Flex>
        {/* Form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Unlock your world.
            <h3>Created by Vyom Raval</h3>
          </Typography.Text>
          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
                {
                  type: "email",
                  message: "The input is not valid email!",
                },
              ]}
            >
              <Input size="large" placeholder="Please Enter your Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Please Enter your Password"
              />
            </Form.Item>
            
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}

            <Form.Item>
              <Button
                type={`${loading ? '' : 'primary'}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin/> : 'Sign In'}
              
              </Button>
            </Form.Item>

            <Form.Item>
              <Link to="/">
                <Button size="large" className="btn">
                  Create an Account
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>

      </Flex>
    </Card>
  );
}
export default Login;
