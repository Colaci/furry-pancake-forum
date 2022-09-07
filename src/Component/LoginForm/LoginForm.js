import React, { useImperativeHandle, useState } from "react";
import './LoginForm.css'
import { Form, Modal } from "antd";

export default function LoginForm(props) {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  useImperativeHandle(props.onRef, () => {
    return {
      showLogin: showLogin,
    };
  });
  const showLogin = () => {
    setIsLoginVisible(true);
  };
  const handleSubmit = () => {
    setIsLoginVisible(false);
  };
  const handleCancle = () => {
    setIsLoginVisible(false);
  };
  return (
    <div className="loginWrapper">
      {/* antd明明是4.x版本但是却没法用官网的open属性非得用3.x的visible */}
      {/* 好吧是4.23才能用open当前为4.22 */}
      <Modal
        title="Furry-Pancke-Forum"
        visible={isLoginVisible}
        onOk={handleSubmit}
        onCancel={handleCancle}
        centered
        wrapClassName={"login"}
      >
        <Form name="loginForm" className="loginForm">
          <div className="loginFormHead">Login...</div>
          <div className="formContent">
            <Form.Item
              label="username"
              name="username"
              rules={[{ required: true, message: "please enter your name" }]}
            >
              <input className="inputBox"></input>
            </Form.Item>
            <Form.Item
              label="password"
              name="password"
              rules={[
                { required: true, message: "please enter your password" },
              ]}
            >
              <input className="inputBox"></input>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
