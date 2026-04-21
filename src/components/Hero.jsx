import React from 'react'
import profileImg from '../assets/images/profile.png';

export default function Hero() {
  return (
    <section id="main">
      <div className="inner">
        <div className="text-area">
          <h1>Moon's Portfolio</h1>
          <h2>안녕하세요, 신입 웹퍼블리셔 문윤경입니다.</h2>
          <p>기획부터 디자인 그리고 퍼블리싱까지, 사용자의 니즈를 고려하여 편리한 웹사이트를 만듭니다.</p>
        </div>
        <figure>
            <img src={profileImg} alt="프로필이미지" />
        </figure>
      </div>
    </section>
  )
}
