import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Skills from './Skills';
import Services from './Services';
import EmailSection from './EmailSection';
import Education from './Education';
import Projects from './Projects';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Services />
            <Skills />
            <Education />
            <Projects />
            <EmailSection />
          
        </div>
    );
};

export default Homepage;