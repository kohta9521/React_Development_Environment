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
        <h4 className="rightbarTitle">
          ユーザー情報
          <div className="rightbarInfo">
            <div className="rightbarInfoTitle">
              <span className="rightbarInfoKey">
                出身 : 
              </span>
              <span className="rightbarInfoKey">
                東京
              </span>
              <br/>
              <span className="rightbarInfoKey">
                学部学科 : 
              </span>
              <span className="rightbarInfoKey">
                法学部 法学科
              </span>
              <br/>
              <span className="rightbarInfoKey">
                学年 : 
              </span>
              <span className="rightbarInfoKey">
                1年生
              </span>
                <h4 className="rightbarTitle">
                  あなたの友達
                </h4>
                <div className="rightbarFollowings">
                  <div className="rightbarFollowing">
                    <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Sato</span>
                  </div>
                  <div className="rightbarFollowing">
                    <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Sato</span>
                  </div>
                  <div className="rightbarFollowing">
                    <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Sato</span>
                  </div>
                  <div className="rightbarFollowing">
                    <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Sato</span>
                  </div>
                </div>
            </div>
          </div>
        </h4>
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

