import { Chat, Search, Notifications } from '@mui/icons-material';
import React from 'react'

import "./Topbar.css";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      {/* LEFT AREA */}
      <div className='topbarLeft'>
        {/* <img src="/assets/logo.jpeg" className='logoImage' alt="学習院大学ロゴ画像" /> */}
        <span className='logo'>Gaxi</span>
      </div>

      {/* CENTER AREA */}
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input type="text" className='searchInput' placeholder='探し物はなんですか？' />
        </div>
      </div>

      {/* RIGHT AREA */}
      <div className="topbarRight">
        <div className='topbarItemIcons'>
          <div className="topbarIconItem">
            <Chat />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className='topbarIconBadge'>2</span>
          </div>
          <img src="/assets/person/1.jpeg" className='topbarImg' alt="プロフィール写真" />
        </div>
      </div>
    </div>
  );
}