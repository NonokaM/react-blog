import React from 'react'
import { auth, db } from "../firebase"
import "./MyPage.css"

export default function Mypage() {
  return (
    <div className="userInformationContainer">
        <img className="icon" src="https://placehold.jp/150x150.png" />
        <h1>{auth.currentUser.displayName}</h1>
        <p>aaaaaaaaaaa</p>
    </div>
  )
}

