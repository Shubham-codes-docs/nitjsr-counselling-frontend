import React from 'react';
import MainNav from '../../components/navbar/MainNav';
import Footer from '../../components/footer/Footer';
import classes from './index.module.css';

const Index = () => {
  return (
      <>
      
        <MainNav/>
        <div className={classes["main-container"]}>
        <h5>Welcome , John Doe !</h5>
        <p className={classes['main-para']}>
          You can confirm your account detail through the link below:{" "}
          <a href="#">CONFIRM YOUR ACCOUNT</a>
          <span className={classes.highlight}>
            {" "}
            Regards, The  <br/> NIMCET 2020 Team
          </span>
        </p>
      </div>
      <Footer/>
      </>
  )
}

export default Index