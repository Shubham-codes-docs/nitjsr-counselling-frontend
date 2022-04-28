import React from 'react';
import classes from './footer.module.css';

const Footer = () => {
  return (
    <footer>
        <p className={classes['contact-para']}> For more information contact us</p>
        <a href="#" className={classes.contact}>www.nimcet.in</a>

    </footer>
  )
}

export default Footer