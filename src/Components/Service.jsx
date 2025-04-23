import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion';

import star from '../assets/star.png';
import lawyer from '../assets/lawyer.png';
import people from '../assets/people.png';
import judgeHammer from '../assets/judge-hammer.png';


const ServiceCard = ({ img, end, label }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5
    });


    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='border-none rounded-xl bg-[#0F0F0F26] px-10 py-12'
        >
            <img src={img} alt={label} />
            <h2 className='text-4xl font-bold my-2 text-black'>
                {inView && <CountUp end={end} duration={2} />}+
            </h2>
            <p className='text-xl font-medium text-[#0F0F0F99]'>{label}</p>
        </motion.div>
    );
};
const Service = () => {
    return (
        <div className='flex flex-col my-10 justify-center items-center'>
            <h1 className='text-4xl font-bold text-black'>We Provide Best Law Services</h1>
            <p className='text-md text-center font-medium text-black'>
                We provide expert legal advice and representation across a wide range of practice areas.
                Our services include civil, criminal, corporate, family, and property law.<br />
                From legal consultation to courtroom advocacy - we stand by your side at every step.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-4 mt-8 gap-10'>
                <ServiceCard img={lawyer} end={199} label="Total Lawyer" />
                <ServiceCard img={star} end={459} label="Total Reviews" />
                <ServiceCard img={judgeHammer} end={1990} label="Cases Initiated" />
                <ServiceCard img={people} end={400} label="Total Staffs" />
            </div>
        </div>
    );
};

export default Service;
