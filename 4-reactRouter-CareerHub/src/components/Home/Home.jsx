import React from 'react';
import Hero from '../Hero/Hero';
import CategoryList from '../CategoryList/CategoryList';
import FeaturesJobs from '../FeaturesJobs/FeaturesJobs';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <CategoryList></CategoryList>
           <FeaturesJobs></FeaturesJobs>
        </div>
    );
};

export default Home;