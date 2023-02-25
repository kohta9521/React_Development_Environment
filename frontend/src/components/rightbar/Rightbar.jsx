import React from 'react'

import "./Rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
      return (
        <>
          <div className="eventContainer">
            <img src="/assets/star.png" className='starImg' alt="" />
            <span className="eventText"><b>フォロワー限定</b>イベント開催中!!</span>
          </div>
          <img src="/assets/ad.jpeg" className='eventImg' alt="" />
          <h4 className='rightbarTitle'>オンラインの友達</h4>
          <ul className="rightbarFriendList">
            {Users.map((user) => (
              <Online user={user} key={user.id} />            
            ))}
          </ul>
          <p className="promotionTitle">プロモーション広告</p>
          <img src="/assets/promotion/promotion1.jpeg" className='rightbarPromotionImg' alt="" />
          <p className="promotionName">ショッピング</p>
          <img src="/assets/promotion/promotion2.jpeg" className='rightbarPromotionImg' alt="" />
          <p className="promotionName">カーショップ</p>
          <img src="/assets/promotion/promotion3.jpeg" className='rightbarPromotionImg' alt="" />
          <p className="promotionName">学習院大学 学食</p>
              </>
      )
    }

    const ProfileRightbar = () => {
      return (
        <>
        profile components
        </>
      )
    }

    return (
      <div className='rightbar'>
        <div className="rightbarWrapper">
          { profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    );
}

