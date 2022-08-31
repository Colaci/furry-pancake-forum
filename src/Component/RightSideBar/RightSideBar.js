import React, { Component } from "react";
import './RightSideBar.css'
export default class RightSideBar extends Component {
  render() {
    return (
      <div className="rightSideBarWrapper">
        <div className="rightSideBar">
            这是右边栏，右边栏高度由栏内内容撑开
            目前设置为固定值
        </div>
      </div>
    );
  }
}
