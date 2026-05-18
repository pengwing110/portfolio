import React, { useState, useEffect } from 'react';

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('');

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';

            const triggerPoint = window.innerHeight * 0.7; 

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
                    current = section.id;
                }
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav>
            <ul className="gnb">
                <li>
                    <a
                        href="#main"
                        className={activeSection === 'main' ? 'active' : ''}
                        onClick={e => {
                            e.preventDefault();
                            scrollToSection("main");
                        }}
                    >
                        Main
                    </a>
                </li>

                <li>
                    <a
                        href="#aboutMe"
                        className={activeSection === 'aboutMe' ? 'active' : ''}
                        onClick={e => {
                            e.preventDefault();
                            scrollToSection("aboutMe");
                        }}
                    >
                        About Me
                    </a>
                </li>

                <li>
                    <a
                        href="#projects"
                        className={activeSection === 'projects' ? 'active' : ''}
                        onClick={e => {
                            e.preventDefault();
                            scrollToSection("projects");
                        }}
                    >
                        Projects
                    </a>
                </li>

                <li>
                    <a
                        href="#contact"
                        className={activeSection === 'contact' ? 'active' : ''}
                        onClick={e => {
                            e.preventDefault();
                            scrollToSection("contact");
                        }}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}