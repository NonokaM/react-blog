import React from 'react'
import { auth, db } from "../firebase"
import "./MyPage.css"
import { Link } from 'react-router-dom'

export default function Mypage() {
  return (
    <div className="userInformationContainer">
      <Link to="/editmypage" className="editMyPageButton">プロフィールを編集 </Link>
      <img className="icon" src="https://placehold.jp/150x150.png" />
      <h1>{auth.currentUser.displayName}</h1>
      <a href="">Twitter</a>
      <a href="">Github</a>
      <p>コメントコメントコメントコメント</p>
      <p>過去の投稿</p>
    </div>
  )
}
