import React from "react";
import RightSideBar from "../../Component/RightSideBar/RightSideBar";
import { Tag, Divider } from "antd";
import "./DetailPage.css";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import {axios} from '../../utils/request'
export default function DetailPage() {
  const params = useParams();
  const [postDetail,setPostDetail] =useState({}); 
  useEffect(()=>{
    axios.post(`/api/post/getPostDetailById/${params.postId}`).then((res)=>{
      setPostDetail(res.data.content)
    })
  },[params])
  
  return (
    <div className="detailContentWrapper">
      <div className="detailMainContent">
        {/* 可以在这里加个头像啥的 */}
        <div className="detailPostInfoBox">{`Posted by ${postDetail.userName} at 2011/1/1`}</div>
        <div className="detailPostTitle">
          {postDetail.title}
          <div className="detailThumbButton">
            <img
              className="detailPostIcon1"
              alt=""
              src={require("../../assets/icons/thumb.png")}
            />
            {postDetail.like}
            <img
              className="detailPostIcon2"
              alt=""
              src={require("../../assets/icons/thumbdown.png")}
            />
          </div>
        </div>
        <div className="detailPostTag">
          {postDetail.label && postDetail.label.map((item)=>{return <Tag key={item.labelId} color="blue">{item.labelName}</Tag>})}
        </div>
        <div className="postContentBox">{postDetail.content}</div>
        <div className="lowerButtomGroup">
          <button className="postButton">
            <img
              className="postIcon"
              alt=""
              src={require("../../assets/icons/comment.png")}
            />
            {postDetail.comment} Comments
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
