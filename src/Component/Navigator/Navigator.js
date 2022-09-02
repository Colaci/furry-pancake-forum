import React from "react";
import "./Navigator.css";
// 导航栏
export default function Navigator() {
  return (
    <div className="navigator">
      <div className="head_icon">
        <img alt="" src="assets/icons/pancake.png" />
        <div className="title">Furry-Pancake-Forum</div>
      </div>
      <input className="search_box" placeholder="Search...." />
      <div className="button_group">
        <button className="naviButton buttonLogin">
          <img alt="" src="assets/icons/cookie.png" />
          Login
        </button>
        <button className="naviButton buttonSettings">
          <img alt="" src="assets/icons/user.png" />
          Settings
        </button>
      </div>
    </div>
  );
}
