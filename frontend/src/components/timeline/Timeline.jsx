import React from 'react'
import "./Timeline.css";

import Share from "../share/Share.jsx";
import Post from "../post/Post.jsx";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className='timelineWrapper'>
        <Share />
        <Post />
      </div>
    </div>
  );
}

