import ForumHead from "../../Component/ForumHead/ForumHead";
import PostItem from "../../Component/PostItem/PostItem";
import RightSideBar from "../../Component/RightSideBar/RightSideBar";
import "./ForumPage.css";
import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import axios from "axios";

export default function ForumPage() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    // 使用这个电影的数据当一下假数据
    axios.get("test.json").then((res) => {
      setPostList(res.data.data.films);
    });
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
                <PostItem className="postItem" key={item.filmId} {...item} />
              );
            })}
          </div>
          <Pagination
            className="pagination"
            defaultCurrent={1}
            total={50}
          ></Pagination>
        </div>
        {/* <button className="newPostButton">New Post</button> */}
        <RightSideBar />
      </div>
    </div>
  );
}
