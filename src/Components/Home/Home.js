import React from 'react';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import Section1 from '../Section1/Section1';

const Home = () => {
    return (
        <div>
        <Header></Header>
        <Section1></Section1>
        <Courses></Courses>
        <Footer></Footer>
        </div>
    );
};

export default Home;