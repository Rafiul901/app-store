
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import StatesSection from '../components/StatesSection';
import TopAppsSection from '../components/TopAppsSection';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <StatesSection />
      <TopAppsSection />
    </div>
  );
};

export default HomePage;