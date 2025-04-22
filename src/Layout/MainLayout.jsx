import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer"

const MainLayout = () => {
    return (
        <>
        <div className='container mx-auto'>
            <Navbar></Navbar>
        </div>
        <div className='mx-auto px-4 md:px-12'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;