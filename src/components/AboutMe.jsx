import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.3 }
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
      </div>
    </section>
  );
}