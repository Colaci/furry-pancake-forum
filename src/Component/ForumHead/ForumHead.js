import React from "react";
// 顶部导航栏下面的图片和子版等
import "./ForumHead.css";
export default function ForumHead() {
  return (
    <div className="forumHead">
      <div className="forumHeadPic">这里是版头的图片</div>
      <div className="forumHeadNavi">
        这里是功能性的内容，版块名字收藏子版精华啥的
      </div>
    </div>
  );
}
