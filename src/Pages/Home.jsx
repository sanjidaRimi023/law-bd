import React from 'react';
import Banner from '../Components/Banner';
import BestLawyer from '../Components/BestLawyer';
import { useLoaderData } from 'react-router';
import Service from '../Components/Service'
const Home = () => {
    const profileData = useLoaderData()

    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <BestLawyer profiles ={profileData}></BestLawyer>
            <Service></Service>
        </div>
    );
};

export default Home;