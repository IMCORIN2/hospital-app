import React, { useEffect, useState } from 'react';

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const sections = ['home', 'about', 'services', 'contact'];

    useEffect(() => {
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.5, // 화면에 50% 이상 보일 때 감지
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        // DOM 요소가 준비된 후 Observer 등록 (setTimeout으로 렌더링 완료까지 살짝 대기)
        const timeoutId = setTimeout(() => {
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.observe(el);
            });
        }, 0); // 0ms라도 다음 이벤트 루프로 밀어 렌더링 완료를 보장

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={navStyle}>
            {sections.map((section) => (
                <div
                    key={section}
                    onClick={() => scrollToSection(section)}
                    style={{
                        ...dotStyle,
                        backgroundColor: activeSection === section ? 'rgba(13, 55, 32, 0.8)' : '#bbb',
                        transform: activeSection === section ? 'scale(1.4)' : 'scale(1)',
                        transition: 'transform 0.3s, background-color 0.3s',
                    }}
                ></div>
            ))}
        </div>
    );
}

const navStyle = {
    position: 'fixed',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    zIndex: 1000,
};

const dotStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: '#bbb', // 기본 색상
};

export default Navbar;
