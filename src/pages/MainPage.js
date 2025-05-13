import React from 'react';
import HomeSection from '../sections/HomeSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import ContactSection from '../sections/ContactSection';

function MainPage() {
    return (
        <div>
            <HomeSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
        </div>
    );
}

export default MainPage;
