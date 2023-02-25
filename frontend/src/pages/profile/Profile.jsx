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
      <Timeline />
      <Rightbar />
    </div>
  </>
  );
}