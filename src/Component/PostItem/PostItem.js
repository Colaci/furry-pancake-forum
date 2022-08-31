import React, { Component } from 'react'
import './PostItem.css'
// 包含了发帖时间，发帖者，帖子标题，点赞数评论数和收藏键 以及其他
export default class PostItem extends Component {
  render() {
    var postInfo={}
    postInfo.category = this.props.category
    postInfo.title = this.props.name
    postInfo.time = this.props.nation
    postInfo.author = this.props.director
    postInfo.thumb = this.props.runtime
    postInfo.comment = this.props.filmId
    return (
      <div className='postItemBlock'>
        <div className="authorTime">{postInfo.author} posted in {postInfo.time}</div>
        <div className='postTitle'>{postInfo.title}</div>
        <div className="postContent">这里应当根据帖子内容由相应的东西</div>
        <div className="functionalIcon">
            <button className="postButton"><img className="postIcon" alt="" src="assets/icons/thumb.png"/>{postInfo.thumb} thumb up</button>
            <button className="postButton"><img className="postIcon" alt="" src="assets/icons/comment.png"/>{postInfo.comment} comments</button>
        </div>
      </div>
    )
  }
}
