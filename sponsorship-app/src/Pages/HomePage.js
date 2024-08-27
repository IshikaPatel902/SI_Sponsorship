import React from 'react';
import Banner from '../Components/Banner';
import NavBar from '../Components/NavBar';
import './HomePage.css'; 
import store from '../Images/store.png'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <img src={store} style={{width:"100%"}} alt='store banner' />
      <Banner />
    <div className="home-page">
      
      <div className="home-content">
        <h2>Welcome to the Sponsorship Management</h2>
        <p>
          This application allows you to view and manage sponsorship data.
          Navigate through the application to view the sponsor data or add new sponsorships.
        </p>
        <div className="home-buttons">
          <a href="/sponsordata" className="btn btn-primary">View Sponsor Data</a>
          <a href="/formpage" className="btn btn-secondary">Submit New Payment</a>
        </div>
        <br/><br/><br/>
      </div>
    </div></div>
  );
};

export default HomePage;
