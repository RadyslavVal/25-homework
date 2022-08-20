import React, { Component } from 'react';
import Post from "./Post";
import { posts } from "../../../service.js"
import './Posts.css'

export default class Posts extends Component {
  render() {
    return (
      <div className="posts" >
        {posts.map(post => <Post data={post} key={post.id}></Post>)}
      </div>
    );
  }
}
