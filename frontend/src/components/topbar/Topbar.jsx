import React from 'react'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      {/* LEFT AREA */}
      <div className='topbarLeft'>
        <span className='logo'>G Port</span>
      </div>

      {/* CENTER AREA */}
      <div className='topbarCenter'>
        <div className='searchbar'>
          <input type="text" className='searchInput' placeholder='探し物はなんですか？' />
        </div>
      </div>

      {/* RIGHT AREA */}
      <div className="topbarRight">
        <div className="topbarIconItem">
          1
        </div>
        <div className="topbarIconItem">
          2
        </div>
        <img src="/assets/person/1.jpeg" className='topbarImg' alt="プロフィール写真" />
      </div>
    </div>
  );
}