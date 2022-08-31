import Navigator from "../../Component/Navigator/Navigator";
import ForumHead from "../../Component/ForumHead/ForumHead";
import PostItem from "../../Component/PostItem/PostItem";
import RightSideBar from "../../Component/RightSideBar/RightSideBar";
import './ForumPage.css'
import React, { Component } from 'react'
import axios from 'axios'

export default class ForumPage extends Component {
  constructor(){
    super()
    this.state={
      postList:[]
    }
    // 使用这个电影的数据当一下假数据
    axios.get('test.json').then((res)=>{
      console.log(res.data.data.films)
      this.setState({
        postList:res.data.data.films
      })
    })
  }
  render() {
    return (
      <div>
        <Navigator/>
        <ForumHead/>
        <div className="contentWrapper">
        <div className="postItemWrapper">
        {this.state.postList.map((item)=>{
          return <PostItem className="postItem" key={item.filmId} {...item}/>
        })}
        </div>
        <RightSideBar/>
        </div>
        
        
      </div>
    )
  }
}
