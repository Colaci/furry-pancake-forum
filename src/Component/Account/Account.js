import React, { useEffect } from "react";
import "./Account.scss";
import { Form } from "antd";
import axios from "axios";
export default function Account() {
  const mockUserInfo = {
    src: require("../../assets/icons/test1.jpg"),
    userName: "test",
    userSig: "这是一个用户签名测试",
    Id: "63823939",
    level: 3,
    email: "1311936071@qq.com",
    phone: "1423425342",
    exp:290,
    date:'2022-2-12',
    sign:12
  };
  useEffect(()=>{
    
  },[])
  return (
    <div className="accountContainer">
      <div className="accountLeft">
        <div className="leftContent">
          <div className="avtar">
            <img alt="头像" src={mockUserInfo.src}></img>
          </div>
          <div className="sig">{mockUserInfo.userSig}</div>
        </div>
      </div>
      <div className="accountRight">
        <div className="rightContent">
          <div className="rightBox" style={{ height: "30%" }}>
            <div className="rightBoxTitle">用户信息 <span>修改</span></div>
            <div className="rightContentBox">
              <Form name="userInfo" className="userForm">
                <div className="formContent">
                  <Form.Item
                    label="用户名"
                    name="userName"
                    rules={[{ required: true }]}
                  >
                    <div className="item">
                      <input
                        className="inputBox"
                        type="text"
                        value={mockUserInfo.userName}
                        onChange={()=>{}}
                        disabled
                      />
                    </div>
                  </Form.Item>
                  <Form.Item
                    label="ID"
                    name="id"
                    rules={[{ required: true }]}
                  >
                    <div className="item">
                      <input
                        className="inputBox"
                        type="text"
                        defaultValue={mockUserInfo.Id}
                        disabled
                      />
                    </div>
                  </Form.Item>
                  <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{ required: true }]}
                    onChange={()=>{}}
                  >
                    <div className="item">
                      <input
                        className="inputBox"
                        type="text"
                        value={mockUserInfo.email}
                        disabled
                      />
                    </div>
                  </Form.Item>
                  <Form.Item
                    label="手机"
                    name="phone"
                    rules={[{ required: true }]}
                  >
                    <div className="item">
                      <input
                        className="inputBox"
                        type="text"
                        value={mockUserInfo.phone}
                        onChange={()=>{}}
                        disabled
                      />
                    </div>
                  </Form.Item>
                  <Form.Item
                    label="注册时间"
                    name="date"
                    rules={[{ required: true }]}
                  >
                    <div className="item">
                      <input
                        className="inputBox"
                        type="text"
                        value={mockUserInfo.date}
                        onChange={()=>{}}
                        disabled
                      />
                    </div>
                  </Form.Item>
                  <Form.Item
                    label="连续签到天数"
                    name="sign"
                    rules={[{ required: true }]}
                  >
                    <div className="item">
                      <input
                        className="inputBox"
                        type="text"
                        value={mockUserInfo.sign}
                        onChange={()=>{}}
                        disabled
                      />
                    </div>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
          <div className="rightBox" style={{ height: "20%" }}>
            <div className="rightBoxTitle">用户等级</div>
            <div className="rightContentBox">
              <div className="levelContent">当前等级为 <span>{mockUserInfo.level}</span><br/>距离下一等级还差 <span>{mockUserInfo.exp}</span> 点经验</div>
            </div>
          </div>
          <div className="rightBox" style={{ height: "50%" }}>
            <div className="rightBoxTitle">我的贴子</div>
            <div className="rightContentBox"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
