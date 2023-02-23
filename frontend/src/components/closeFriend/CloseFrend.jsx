import React from 'react'

export default function CloseFrend({ user }) {
  return (
    <li className="sidebarFriend">
    <img src={user.profilePicture} className='sidebarFriendImg' alt="" />
    <span className='sidebarFriendName'>{user.username}</span>
  </li>
  )
}

