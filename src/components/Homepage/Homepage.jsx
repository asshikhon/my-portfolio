import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Skills from './Skills';
import Services from './Services';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Services />
            <Skills />
        </div>
    );
};

export default Homepage;