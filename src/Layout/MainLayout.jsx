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
        <div className='min-h-[calc(100vh-319px)]'>
        <div className='container mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
        <Outlet></Outlet>
        </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;