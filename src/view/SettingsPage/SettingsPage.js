import { Layout, Menu } from "antd";
import { Header, Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import axios from "axios";
import "./SettingsPage.scss";

const SettingsPage = () => {
  const [menuItems, setmenuItems] = useState([]);
  axios.get("basic_layout.json").then((res) => {
    setmenuItems(res.data.English.settingsNameList);
  });
  return (
    <>
      <Layout>
        <Header>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            theme="dark"
            items={menuItems.map((e, idx) => {
              return {
                key: idx,
                label: menuItems[idx],
              };
            })}
          ></Menu>
        </Header>
        <Content>
          <div className="content-container"></div>
        </Content>
      </Layout>
    </>
  );
};

export default SettingsPage;
