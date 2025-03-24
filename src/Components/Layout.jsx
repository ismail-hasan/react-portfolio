import React from 'react';
import Home from './Home';
import Skills from './Skills';
import Projects from './Project';
import Contact from './Contact';
import ContactForm from './ContactForm';
import Choice from './Choice';
import Project from './Project';
import ProjectLayout from './ProjectLayout';
import { NavLink, Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <Home></Home>
            <Skills></Skills>
            <Project></Project>
            <ProjectLayout></ProjectLayout>
            <Choice></Choice>
            <Contact></Contact>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Layout;