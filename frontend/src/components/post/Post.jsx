import { MoreVert } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react';
import "./Post.css";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like -1 : like + 1);
    setIsLiked(isLiked);
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((user) => user.id === post.id)[0].profilePicture} className='postProfileImg' alt="" />
            <span className='postUserName'>{Users.filter((user) => user.id === post.id)[0].username}</span>
            <span className='postDate'>{post.date}</span>            
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>          
        </div>

        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} className='postImg' alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/heart.png" className='likeIcon' onClick={() => handleLike()} alt="" />
            <span className="postLikeCounter">{like}人がいいねを押しました</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}コメント</span>
          </div>
        </div>
      </div>
    </div>
  )
}
