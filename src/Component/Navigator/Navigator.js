import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./Navigator.scss";
import { SettingFilled, LoginOutlined } from "@ant-design/icons";

// 导航栏

const Navigator = (props) => {
  // Login弹窗

  const login = React.createRef();
  const handleLogin = () => {
    login.current.showLogin();
  };

  const navigate = props.navigate;
  const handleSettings = () => {
    navigate("/settings");
  };
  const handleMain = () => {
    navigate("");
  };
  return (
    <div className="navigator">
      <div className="headIcon" onClick={handleMain}>
        <img
          alt="pancake forum logo"
          src={require("../../assets/icons/pancake.png")}
        />
        <div className="title">Furry-Pancake-Forum</div>
      </div>
      <input className="searchBox" placeholder="Search...." />
      <div className="buttonGroup">
        <button className="naviButton" onClick={handleLogin}>
          <LoginOutlined className="button-icon" />
          <div>Login</div>
        </button>

        <button className="naviButton extend" onClick={handleSettings}>
          <SettingFilled className="button-icon" />
          <div>Settings</div>
        </button>
      </div>
      <LoginForm onRef={login}></LoginForm>
    </div>
  );
};

export default Navigator;
