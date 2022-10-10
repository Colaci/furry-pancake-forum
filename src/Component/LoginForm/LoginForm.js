import React, { useImperativeHandle, useState } from "react";
import "./LoginForm.css";
import { Form, Modal, Button } from "antd";
import { useCallback } from "react";

function LoginForm(props) {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  useImperativeHandle(props.onRef, () => {
    return {
      showLogin: showLogin,
    };
  });

  const showLogin = useCallback(() => {
    setIsLoginVisible(true);
  }, []);
  const handleSubmit = () => {
    console.log("submit");
    setIsLoginVisible(false);
    if (isRegister) {
      setIsRegister(false);
    }
  };
  const handleRegister = () => {
    console.log(isRegister);
    setIsRegister(true);
  };
  const handleCancel = () => {
    console.log("cancle");
    setIsRegister(false)
    setIsLoginVisible(false);
  };
  return (
    <div className="loginWrapper">
      {/* antd明明是4.x版本但是却没法用官网的open属性非得用3.x的visible */}
      {/* 好吧是4.23才能用open当前为4.22 */}
      <Modal
        title="Furry-Pancke-Forum"
        visible={isLoginVisible}
        onCancel={handleCancel}
        centered
        wrapClassName={"login"}
        footer={[
          !isRegister ? (
            <Button key="register" onClick={handleRegister}>
              Register
            </Button>
          ) : null,
          <Button key="submit" onClick={handleSubmit}>
            OK
          </Button>,
        ]}
      >
        <Form name="loginForm" className="loginForm">
          <div className="loginFormHead">
            {isRegister ? "Register..." : "Login..."}
          </div>
          <div className="formContent">
            <Form.Item
              label="username"
              name="username"
              rules={[{ required: true, message: "please enter your name" }]}
            >
              <input className="inputBox"></input>
            </Form.Item>
            {isRegister && (
              <Form.Item
                label="email"
                name="email"
                rules={[{ required: true, message: "please enter your email" }]}
              >
                <input className="inputBox"></input>
              </Form.Item>
            )}
            <Form.Item
              label="password"
              name="password"
              rules={[
                { required: true, message: "please enter your password" },
              ]}
            >
              <input className="inputBox"></input>
            </Form.Item>
            {isRegister && (
              <Form.Item
                label="password"
                name="confirmPassword"
                rules={[
                  { required: true, message: "please confirm your password" },
                ]}
              >
                <input className="inputBox"></input>
              </Form.Item>
            )}
          
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default LoginForm;
