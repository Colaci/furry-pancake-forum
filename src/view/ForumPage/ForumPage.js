import ForumHead from "../../Component/ForumHead/ForumHead";
import PostItem from "../../Component/PostItem/PostItem";
import RightSideBar from "../../Component/RightSideBar/RightSideBar";
import "./ForumPage.css";
import React, { useState, useEffect } from "react";
import {axios} from '../../utils/request'
import { Pagination } from "antd";

export default function ForumPage() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios.post('/api/post/getPostsPageByPage',{length:10,page:1,asc:1}).then((res)=>{
      console.log('post的数据',res)
      setPostList(res.data.content)
    })
  }, []);

  return (
    <div>
      <ForumHead />
      <div className="contentWrapper">
        <div className="postItemWrapper">
          <input className="newPostBox" placeholder="Create new post.."></input>
          <div className="postContent">
            {postList.map((item) => {
              return (
                <PostItem className="postItem" key={item.postId} {...item} />
              );
            })}
          </div>
          <Pagination
            className="pagination"
            defaultCurrent={1}
            total={postList.length}
          ></Pagination>
        </div>
        {/* <button className="newPostButton">New Post</button> */}
        <RightSideBar />
      </div>
    </div>
  );
}
