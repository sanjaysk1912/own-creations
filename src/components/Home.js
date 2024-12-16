import React from 'react';
import MainBanner from './MainBanner';
import MidSection from './MidSection';
import Cloud from './Cloud';
import Development from './Development';
import Services from './Services';
import Team from './Team'
import User from './User'
import Price from './Price'
import Blog from './Blog'
import Footer from './Footer'
const Home = () => {
    return (
        <div>
           
           <MainBanner />
            <MidSection />
            <Cloud />
            <Development />
            <Services />
            <Team />
            <User />
            <Price />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;
