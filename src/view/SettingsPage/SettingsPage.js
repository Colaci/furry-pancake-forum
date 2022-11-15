import { Layout, Menu } from "antd";
import { Header, Content } from "antd/lib/layout/layout";
import React, { useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import {axios} from "../../utils/request";
import "./SettingsPage.scss";
import Account from "../../Component/Account/Account";
import UserPosts from "../../Component/UserPosts/UserPosts";

const SettingsPage = (props) => {
  const [searchParams,setSearchParams]=useSearchParams();
  const [menuItems, setmenuItems] = useState([]);
  const [selectKey,setSelectKey] = useState(searchParams.get('key'));
  useEffect(()=>{
    setmenuItems(["账户设置", "帖子", "通知", "邮箱", "聊天"]);
    // axios.get("basic_layout.json").then((res) => {
    //   setmenuItems(res.data.English.settingsNameList);
    // });
    axios.get('/api/user/123@qq.com/getUserInfoByEmail').then((res)=>{
      console.log('让我看看有没有数据',res)
    })
  },[])
  
  const handleClick=(e)=>{
    setSelectKey(e.key)
  }
  return (
    <>
      <Layout>
        <Header>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[selectKey]}
            theme="dark"
            items={menuItems.map((e, idx) => {
              return {
                key: idx,
                label: menuItems[idx],
              };
            })}
            onClick={handleClick}
          ></Menu>
        </Header>
        <Content>
          <div className="content-container">
            {selectKey === '0' && <Account></Account>}
            {selectKey === '1' && <UserPosts></UserPosts>}
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default SettingsPage;
