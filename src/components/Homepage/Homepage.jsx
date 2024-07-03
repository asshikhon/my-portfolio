import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Skills from './Skills';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Skills />
        </div>
    );
};

export default Homepage;