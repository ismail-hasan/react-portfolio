import React from 'react';
import Home from './Home';
import Skills from './Skills';
import Projects from './Project';
import Contact from './Contact';
import ContactForm from './ContactForm';

const Layout = () => {
    return (
        <div>
            <Home></Home>
            <Skills></Skills>
            <Contact></Contact>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Layout;