import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./Navigator.scss";
import { Dropdown, Menu } from "antd";
import { SettingFilled, LoginOutlined } from "@ant-design/icons";

// 导航栏

const Navigator = (props) => {
  // Login弹窗

  const login = React.createRef();
  const handleLogin = () => {
    login.current.showLogin();
  };
  const settingsMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              {/* 可以在这里加图标 */}
              Account
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Profile
            </a>
          ),
          disabled: false,
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Notification
            </a>
          ),
          disabled: false,
        },
        {
          key: "4",
          label: "Email",
        },
        {
          key: "5",
          label: "Chat",
        },
      ]}
    />
  );

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
        {/* 如果当前已经是设置页希望不展示下拉菜单 */}
        <Dropdown overlay={settingsMenu} placement="bottomRight" arrow>
          <button className="naviButton extend" onClick={handleSettings}>
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
