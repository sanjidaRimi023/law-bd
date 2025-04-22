import React from 'react';
import Banner from '../Components/Banner';
import BestLawyer from '../Components/BestLawyer';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <BestLawyer></BestLawyer>
        </div>
    );
};

export default Home;