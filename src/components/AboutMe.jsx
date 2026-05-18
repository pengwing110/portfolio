import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/images/aboutme.png";
import skills1 from '../assets/images/skills/skills1.png';
import skills2 from '../assets/images/skills/skills2.png';
import skills3 from '../assets/images/skills/skills3.png';
import skills4 from '../assets/images/skills/skills4.png';
import skills5 from '../assets/images/skills/skills5.png';
import skills6 from '../assets/images/skills/skills6.png';
import skills7 from '../assets/images/skills/skills7.png';
import skills8 from '../assets/images/skills/skills8.png';
import skills9 from '../assets/images/skills/skills9.png';
import skills10 from '../assets/images/skills/skills10.png';
import skills11 from '../assets/images/skills/skills11.png';
import skills12 from '../assets/images/skills/skills12.png';

const skills = [
  skills1, skills2, skills3, skills4, skills5, skills6, skills7, skills8, skills9, skills10, skills11, skills12
];

export default function AboutMe() {
  const titleRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="aboutMe" className="section">
      <div className="inner">
        <h1
          ref={titleRef}
          className={visible ? "title show" : "title"}
        >
          About Me
        </h1>

        <div className="about-container">
          <div className="about-profile">

            <div className="about-left">
              <img src={profileImg} alt="프로필 이미지" />
            </div>

            <div className="about-right">
              <p className="about-title">
                문윤경 | 2001.01.10
              </p>
              <div className="about-text">
                <p className="about-desc">
                  안녕하세요! 아이디어를 구조로 설계하고,
                  실제 웹 화면으로 구현하는 웹 퍼블리셔 문윤경입니다.
                </p>
                <p className="about-desc">
                  기획 의도를 이해하고 디자인과 코드의 연결을 바탕으로,
                  완성도 높은 결과물을 만들어내는 것을 목표로 합니다.
                  단순히 디자인과 개발에 그치지 않고,
                  사용자의 경험과 니즈를 고려한 UX 설계를 고민하는 과정에도
                  많은 관심을 가지고 있습니다.
                </p>
                <p className="about-desc">
                  맡은 일은 항상 최선을 다해 책임감 있게 수행하며,
                  더 나은 결과를 위해 지속적으로 고민하고 노력하고 있습니다.
                </p>
              </div>

              <div className="about-info">
                <div className="about-section">
                  <h3>LICENSE</h3>
                  <ul className="license-list">
                    <li>컴퓨터활용능력 2급</li>
                  </ul>
                </div>
                <div className="about-section">
                  <h3>EDUCATION</h3>
                  <ul className="education-list">
                    <li>
                      <span>2025.11 - 2026.04</span> <br />MBC 아카데미 컴퓨터교육센터 -
                      생성형 AI를 활용한 영상 웹퍼블리셔&
                      프론트엔드(React) 개발자 양성반 수료
                    </li>
                    <li>
                      <span>2020.03 - 2025.08</span> <br />
                      한성대학교 경영학과 졸업
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="skills">
            <h3>SKILLS</h3>

            <div className="skill-list">
              {skills.map((skill, index) => (
                <img
                  key={index}
                  src={skill}
                  alt={`skill-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}