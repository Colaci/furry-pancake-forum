import React from "react";
import { Tag } from "antd";
import "./PostItem.css";
import { useNavigate } from "react-router-dom";
import {axios} from '../../utils/request'
// 包含了发帖时间，发帖者，帖子标题，点赞数评论数和收藏键 以及其他
export default function PostItem(props) {
  var postInfo = {...props};
  var postId = props.postId;
  const navigate = useNavigate()
  const handleLike=(e)=>{
    e.stopPropagation();
    console.log('wo dianji ')
  }
  return (
    <div onClick={()=>{navigate(`/detail/${postId}`)}} className="postItemBlock">
      <div className="authorTime">
        {postInfo.userName} posted in {'2018'}
      </div>
      <div className="postTitle">
        {postInfo.title}
        {postInfo.label.map((item)=>{return <Tag color="blue" key={item.labelId}>{item.labelName}</Tag>})}
        
      </div>
      <div className="postContent">{postInfo.content.substring(0,postInfo.content.indexOf('\n'))}</div>
      <div className="functionalIcon">
        <button className="postButton" onClick={handleLike}>
          <img className="postIcon" alt="" src={require("../../assets/icons/thumb.png")} />
          {postInfo.like} thumb up
        </button>
        <button className="postButton">
          <img className="postIcon" alt="" src={require("../../assets/icons/comment.png")} />
          {postInfo.comment} comments
        </button>
      </div>
    </div>
  );
}
