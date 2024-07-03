import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Skills from './Skills';
import Services from './Services';
import EmailSection from './EmailSection';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Services />
            <Skills />
            <EmailSection />
        </div>
    );
};

export default Homepage;