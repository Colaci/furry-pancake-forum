import React from "react";
import "./RightSideBar.css";
export default function RightSideBar() {
    return (
        <div className="rightSideBarWrapper">
            <div className="rightSideBar">
                <div className="rightSideBarHeader">SideBarTitle</div>
                <div className="rightSideBarContent">
                    这是右边栏，右边栏高度由栏内内容撑开 目前设置为固定值
                </div>
            </div>
        </div>
    );
}
