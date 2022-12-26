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
        <div>
            {/* 登录界面 默认hide */}
            {/* 其实原先有个bug Login放在navifunctionbar下 被判定为navifunctionBar里的元素，而navifunctionBar是space-between 会导致这个flex最右边的一部分空出来（有一个看不见的元素占位)，不过已经改好了*/}
            <LoginForm className="login-form" onRef={login}></LoginForm>
            {/* 所有内容放在naviFunctionBar下，是个horizontal flex */}
            <div className="naviFunctionBar">
                {/* 论坛名称和icon区域 */}
                <div className="headIcon" onClick={handleMain}>
                    <img
                        alt="pancake forum logo"
                        src={require("../../assets/icons/pancake.png")}
                    />
                    <div className="title">Furry-Pancake-Forum</div>
                </div>

                {/* 搜索区域 */}
                <input className="searchBox" placeholder="Search...." />

                {/* 搜索区域旁边的按钮功能区 用于呈现用户头像、实现修改用户信息、登录退出等功能 */}
                <div className="buttonGroup">
                    <button className="naviButton" onClick={handleLogin}>
                        {/* 登录按钮 */}
                        <LoginOutlined className="button-icon" />
                        <div>Login</div>
                    </button>
                    {/* 如果当前已经是设置页希望不展示下拉菜单 */}
                    <Dropdown
                        disabled={
                            window.location.href.indexOf("settings") !== -1
                        }
                        overlay={settingsMenu}
                        placement="bottomRight"
                        arrow
                    >
                        <button className="naviButton extend">
                            <SettingFilled className="button-icon" />
                            <div>Settings</div>
                        </button>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default Navigator;
