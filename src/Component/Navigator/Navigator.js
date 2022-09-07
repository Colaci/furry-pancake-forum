import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./Navigator.css";
// 导航栏
export default function Navigator() {
  // Login弹窗
  const login = React.createRef();
  const handleLogin = () => {
    login.current.showLogin();
  };
  return (
    <div className="navigator">
      <div className="headIcon">
        <img alt="" src="assets/icons/pancake.png" />
        <div className="title">Furry-Pancake-Forum</div>
      </div>
      <input className="searchBox" placeholder="Search...." />
      <div className="buttonGroup">
        <button className="naviButton buttonLogin" onClick={handleLogin}>
          <img alt="" src="assets/icons/cookie.png" />
          Login
        </button>
        <button className="naviButton buttonSettings">
          <img alt="" src="assets/icons/user.png" />
          Settings
        </button>
      </div>
      <LoginForm onRef={login}></LoginForm>
    </div>
  );
}
