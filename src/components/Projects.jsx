import React from 'react'
import { useEffect, useRef, useState } from 'react';
import Publishing from './Publishing';
import Design from './Design';

export default function Projects() {
    const [activeTab, setActiveTab] = useState('tab1');

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
        <section id="projects" className="section">
            <div className="inner">
                <h1 ref={titleRef}
                    className={visible ? "title show" : "title"}>Projects</h1>
                <p className='sub-title'>프로젝트 영역은 퍼블리싱 결과물<span>(6개)</span>과 디자인 결과물<span>(포토샵 11개, 피그마 3개)</span>로 구성되어 있습니다.</p>
                <div>
                    <div className="tab-menu">
                        <button
                            className={activeTab === 'tab1' ? 'active' : ''}
                            onClick={() => setActiveTab('tab1')}>
                            퍼블리싱
                        </button>
                        <button
                            className={activeTab === 'tab2' ? 'active' : ''}
                            onClick={() => setActiveTab('tab2')}>
                            디자인
                        </button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 'tab1' && <Publishing />}
                        {activeTab === 'tab2' && <Design />}
                    </div>
                </div>
            </div>
        </section>
    )
}
