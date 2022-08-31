import React, { Component } from "react";
// 顶部导航栏下面的图片和子版等
import "./ForumHead.css";
export default class ForumHead extends Component {
  constructor() {
    super();
    this.state = {
      forumName: "TestForum",
      subForums: ["sub1", "sub2", "sub3"],
    };
  }
  render() {
    return (
      <div className="forumHead">
        <div className="forumHeadPic">这里是版头的图片</div>
        <div className="forumHeadNavi">这里是功能性的内容，版块名字收藏子版精华啥的</div>
      </div>
    );
  }
}
