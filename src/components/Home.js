import React from 'react';
import { ContentWrapperInvisible, Hero } from '../shared/Layout';
import { H1Dark, H2Light } from '../shared/Typography';
import { ButtonFilled, ButtonOutlined } from '../shared/Button';
import  PoolList  from '../shared/PoolList';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main> 
      <Hero>
        <div>
          <H1Dark>Lend your NFTs and become liquid! DeedsDAO fractionalizes NFTs, making them accessible for everyone.</H1Dark>
          
          <div className="buttons-wrapper">
            <ButtonOutlined><Link to="/add-pool">Add Pool</Link></ButtonOutlined>
            <ButtonFilled><Link to="/pool">Manage Pools</Link></ButtonFilled>
          </div>
        </div>
      </Hero> 
      <ContentWrapperInvisible>
        <H2Light>Explore Pools</H2Light>
        <PoolList items={null} noActions={true} />
        
      </ContentWrapperInvisible>
    </main>
  )
}

export default Home;