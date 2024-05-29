import React from "react";
import { Alert,Spin,Card, Flex, Form, Typography, Input, Button } from "antd";
import { Link } from "react-router-dom"; // Change this line
import p1 from "../assets/p1.jpg";
import useSignup from "../hooks/useSignup";

function Register() 
{
  const {loading,error,registerUser} = useSignup();
  const handleRegister = (values) => {
    registerUser(values);
  };
  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join our Company for Exclusive Offers and Perks !
             <br />
            <h3>Created by Vyom Raval</h3>
          </Typography.Text>
          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input size="large" placeholder="Please Enter your full name" />
            </Form.Item>
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
            <Form.Item
              label="Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please input your Re-Password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-Enter your Password"
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
                {loading ? <Spin/> : 'Create Account'}
                
              </Button>
            </Form.Item>

            <Form.Item>
              <Link to="/login">
                <Button size="large" className="btn">
                  Sign in
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>

        {/* Image Section Starts here */}
        <Flex flex={1}>
          <img src={p1} className="auth-image" />
        </Flex>
      </Flex>
    </Card>
  );
};
export default Register;
