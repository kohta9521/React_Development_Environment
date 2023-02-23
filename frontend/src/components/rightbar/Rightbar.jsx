import React from 'react'

import "./Rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="/assets/star.png" className='starImg' alt="" />
          <span className="eventText"><b>フォロワー限定</b>イベント開催中!!</span>
        </div>
        <img src="/assets/ad.jpeg" className='eventImg' alt="" />
        <h4 className='rightbarTitle'>オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/3.jpeg" className='rightbarProfileImg' alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Suzuki</span>
          </li>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/4.jpeg" className='rightbarProfileImg' alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Tanaka</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

