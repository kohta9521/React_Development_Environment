import React from 'react'

import "./Profile.css";

import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar'

export default function Profile() {
  return (
    <>
    <Topbar />
    <div className='profile'>
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img src="/assets/post/3.jpeg" className='profileCoverImg' alt="" />
            <img src="/assets/person/1.jpeg" className='profileUserImg' alt="" />
            <div className="profileInfo">
              <h4 className='profileInfoName'>Kohta</h4>
              <span className='profileIngoDesc'>法学部 法学科 1年生</span>
            </div>
          </div>
        </div>
        <div className='profileRightBottom'>
          <Timeline />
          <Rightbar />                  
        </div>
      </div>
    </div>
  </>
  );
}