import React from "react";
import RightSideBar from "../../Component/RightSideBar/RightSideBar";
import { Tag, Divider } from "antd";
import "./DetailPage.css";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const mockPostContent = {
    postId: 1,
    author: "anomy",
    time: "2022/9/10",
    title: "Random comment about Gregson.",
    tag: "spoiler",
    content: `Spoilers!

      .
      
      I was just thinking how ironic it was for Gregson to fight so intensely to prevent people to hear the message in the last case of Adventures, which was encrypted. Perhaps if he has heard the message himself he would have realized that he was the intended victim of Kasogi (he knew A. Sinn was the person actually doing the Reaper killings, and he knew Dr. Watson),
      
      Or he could have thought that everyone on the list was a victim. As far as he knew, Watson and Kasogi were death at the time. In any case, Stronghart plans would have needed to change if the names had been revealed in public. It is a shame it was in Japanese Morse.`,
    thumb: 16,
    comment: 3,
  };
  const params = useParams();
  return (
    <div className="detailContentWrapper">
      <div className="detailMainContent">
        {/* 可以在这里加个头像啥的 */}
        <div className="detailPostInfoBox">{`Posted by ${mockPostContent.author} at ${mockPostContent.time}`}</div>
        <div className="detailPostTitle">
          {mockPostContent.title}
          <div className="detailThumbButton">
            <img
              className="detailPostIcon1"
              alt=""
              src={require("../../assets/icons/thumb.png")}
            />
            {mockPostContent.thumb}
            <img
              className="detailPostIcon2"
              alt=""
              src={require("../../assets/icons/thumbdown.png")}
            />
          </div>
        </div>
        <div className="detailPostTag">
          <Tag color="blue">{mockPostContent.tag}</Tag>
        </div>
        <div className="postContentBox">{mockPostContent.content}</div>
        <div className="lowerButtomGroup">
          <button className="postButton">
            <img
              className="postIcon"
              alt=""
              src={require("../../assets/icons/comment.png")}
            />
            {mockPostContent.comment} Comments
          </button>
          <button className="postButton">
            <img
              className="detailPostIcon"
              alt=""
              src={require("../../assets/icons/save.png")}
            />
            Save
          </button>
          <button className="postButton">
            <img
              className="detaiPostIcon"
              alt=""
              src={require("../../assets/icons/share.png")}
            />
            Share
          </button>
        </div>
        <Divider className="detailDivider"></Divider>
        <div className="commentArea">这里是一个富文本编辑器用于放文本</div>
        <Divider className="detailDivider"></Divider>
        <div className="commentArea">这里是放评论的地方</div>
      </div>
      <RightSideBar />
    </div>
  );
}
