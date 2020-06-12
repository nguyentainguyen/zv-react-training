import { Button, Form, Input } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginRequest } from "../actions/index";
import "antd/dist/antd.css";
import "./login.css";

function Login({ loginRequest, login }) {
  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  };
  const onFinish = values => {
    loginRequest(values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  if (login.token) {
    return <Redirect to="/protected"></Redirect>;
  }

  return (
    <div className="login-form">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default connect(mapStateToProps, {
  loginRequest
})(Login);
