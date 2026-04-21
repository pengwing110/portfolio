import React from 'react'
import { useState, useEffect } from 'react';

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('')

    const scrollToSection = id => {
        const section = document.getElementById(id);
        section?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section')

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-100px 0px -40% 0px',
                threshold: 0.1
            }
        )

        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <nav>
            <ul className="gnb">
                <li>
                    <a href="#main" className={activeSection === 'main' ? 'active' : ''} onClick={e => {
                        e.preventDefault();
                        scrollToSection("main")
                    }}>Main</a>
                </li>
                <li>
                    <a href="#aboutMe" className={activeSection === 'aboutMe' ? 'active' : ''} onClick={e => {
                        e.preventDefault();
                        scrollToSection("aboutMe")
                    }}>About Me</a>
                </li>
                <li>
                    <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={e => {
                        e.preventDefault();
                        scrollToSection("projects")
                    }}>Projects</a>
                </li>
                 <li>
                    <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={e => {
                        e.preventDefault();
                        scrollToSection("contact")
                    }}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}
