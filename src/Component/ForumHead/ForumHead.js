import React from "react";
// 顶部导航栏下面的图片和子版等
import "./ForumHead.css";
export default function ForumHead() {
  return (
    <div className="forumHead">
      <div className="forumHeadPic">这里是版头的图片</div>
      <div className="forumHeadNavi">
        这里是功能性的内容，版块名字收藏子版精华啥的
        <br />
        (没有精华，精华应该放到下面) (logo真得换，我去让龚子航画几个)
      </div>
    </div>
  );
}
