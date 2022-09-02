import React from "react";
import { Tag } from "antd";
import "./PostItem.css";
// 包含了发帖时间，发帖者，帖子标题，点赞数评论数和收藏键 以及其他
export default function PostItem(props) {
  var postInfo = {};
  postInfo.category = props.category;
  postInfo.title = props.name;
  postInfo.time = props.nation;
  postInfo.author = props.director;
  postInfo.thumb = props.runtime;
  postInfo.comment = props.filmId;
  return (
    <div className="postItemBlock">
      <div className="authorTime">
        {postInfo.author} posted in {postInfo.time}
      </div>
      <div className="postTitle">
        {postInfo.title}
        <Tag color="blue">{postInfo.category}</Tag>
      </div>
      <div className="postContent">这里应当根据帖子内容由相应的东西</div>
      <div className="functionalIcon">
        <button className="postButton">
          <img className="postIcon" alt="" src="assets/icons/thumb.png" />
          {postInfo.thumb} thumb up
        </button>
        <button className="postButton">
          <img className="postIcon" alt="" src="assets/icons/comment.png" />
          {postInfo.comment} comments
        </button>
      </div>
    </div>
  );
}
