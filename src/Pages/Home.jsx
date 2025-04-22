import React from 'react';
import Banner from '../Components/Banner';
import BestLawyer from '../Components/BestLawyer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const profileData = useLoaderData()

    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <BestLawyer profiles ={profileData}></BestLawyer>
        </div>
    );
};

export default Home;