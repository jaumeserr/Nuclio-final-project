import facebook from 'assets/images/footer/logo_facebook.svg';
import instagram from 'assets/images/footer/logo_instagram.svg';
import twitter from 'assets/images/footer/logo_twitter.svg';
import logoSkyreader from 'assets/images/logo_skyreader.svg';
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.__container__footer}>
            <img src={logoSkyreader} alt="Logo Skyreader"/>
            <p>
                Planning your perfect trip? Get inspiration and search flights to our most popular
                destinations – we're here to make it all super easy, wherever you are. Find great deals with
                us and book your next trip today.
            </p>
            <div className={styles.__container__icons}>
                <a href="https://twitter.com/skyscanner_es">
                    <img src={twitter} alt="Twitter icon"/>
                </a>
                <a href="http://facebook.com/Skyscanner">
                    <img src={facebook} alt="Facebook icon"/>
                </a>
                <a href="https://www.instagram.com/skyscanner_es/?hl=es">
                    <img src={instagram} alt="Instagram icon"/>
                </a>
            </div>
        </div>
    );
};

export default Footer;
