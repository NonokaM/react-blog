import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>title</h1>
        </div>
        <div className="postTextContainer">
          ブログの記事内容＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
        </div>
        <div className="nameAndDeleteButton">
          <h3>@NonokaM</h3>
          <button>delete</button>
        </div>
      </div>
    </div>
  )
}

export default Home
