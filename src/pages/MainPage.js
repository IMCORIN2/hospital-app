import React from 'react';
import HomeSection from '../sections/HomeSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import ContactSection from '../sections/ContactSection';
import Navbar from '../components/Navbar'; // 상단 내비게이션 (필요 없으면 빼도 돼)

function MainPage() {
    // 버튼 클릭 시 섹션으로 부드럽게 이동
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} /> {/* 필요 없으면 이 줄 제거 */}
            <div
                style={{
                    height: '100vh',
                    overflowY: 'scroll',
                    scrollSnapType: 'y mandatory',
                }}
            >
                <section id="home" style={sectionStyle}>
                    <HomeSection />
                </section>
                <section id="about" style={sectionStyle}>
                    <AboutSection />
                </section>
                <section id="services" style={sectionStyle}>
                    <ServicesSection />
                </section>
                <section id="contact" style={sectionStyle}>
                    <ContactSection />
                </section>
            </div>
        </>
    );
}

const sectionStyle = {
    height: '100vh',
    scrollSnapAlign: 'start',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export default MainPage;
