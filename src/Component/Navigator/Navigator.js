import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./Navigator.scss";
import { Dropdown, Menu } from "antd";
import { SettingFilled, LoginOutlined } from "@ant-design/icons";
import Account from "../Account/Account";
// 导航栏

const Navigator = (props) => {
  // Login弹窗

  const login = React.createRef();
  const handleLogin = () => {
    login.current.showLogin();
  };
  const handleSettings = (e) => {
    navigate(`/settings/?key=${e.key}`);
  };
  const settingsMenu = (
    <Menu
      onClick={handleSettings}
      items={[
        {
          key: "0",
          label: "Account",
        },
        {
          key: "1",
          label: "Posts",
          disabled: false,
        },
        {
          key: "2",
          label: "Notification",
          disabled: false,
        },
        {
          key: "3",
          label: "Email",
        },
        {
          key: "4",
          label: "Chat",
        },
      ]}
    />
  );
  
  const navigate = props.navigate;
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
        {/* 如果当前已经是设置页希望不展示下拉菜单 */}
        <Dropdown disabled={window.location.href.indexOf('settings') !== -1} overlay={settingsMenu} placement="bottomRight" arrow>
          <button className="naviButton extend">
            <SettingFilled className="button-icon" />
            <div>Settings</div>
          </button>
        </Dropdown>
      </div>
      <LoginForm onRef={login}></LoginForm>
    </div>
  );
};

export default Navigator;
