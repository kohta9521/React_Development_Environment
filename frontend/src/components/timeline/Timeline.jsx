import React from 'react'
import "./Timeline.css";

import Share from "../share/Share.jsx";
import Post from "../post/Post.jsx";
import { Posts } from "../../dummyData";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className='timelineWrapper'>
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

