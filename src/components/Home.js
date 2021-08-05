import React from 'react';
import Header from "./Header";
import Search from './Search';
import Serve from './Serve';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Search />
            <Serve />
            <Footer />
        </div>
    )
}

export default Home
