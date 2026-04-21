import React from 'react'
import NavBar from './NavBar'
import logo from '../assets/images/moon.png';
import { Link } from 'react-router-dom';
import Hero from './Hero';

export default function Header() {
  return (
    <header>
      <div className="inner">
        <h1 className="logo">
          <a href="">
            <img src={logo} alt="달 이미지" />
            <span>Moon</span>
          </a>
        </h1>
        <NavBar />
      </div>
    </header>
  )
}
