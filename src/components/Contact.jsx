import React from 'react'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact">
      <div className="inner">
        <h2>신입으로서 많이 배우고 기여할 수 있는 기회를 기다리고 있습니다. </h2>
        <div className="email">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=swer0101@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail />
            <span>swer0101@gmail.com</span>
          </a>
        </div>
        <p className='contact-text'>궁금하신 부분은 이메일로 연락 주시면 감사하겠습니다.</p>
        <p className='copyright'>© 2026 Moon YunKyung. All rights reserved.</p>
      </div>
    </section>
  )
}
