import React from 'react';
import styles from './LandingPages.module.css';
import logo from '../../assets/logo.png';
import boreal from '../../assets/boreal.jpg';
import Australia from '../../assets/Australia.jpg';
import playa from '../../assets/playa.jpg';
import Paris from '../../assets/Paris.jpg';
import Egypt from '../../assets/Egytp.jpg'
import Rio from '../../assets/Rio.jpg'
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram-bosquejado.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';

/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';*/

const LandingPages = () => {
    return (
        <div>
            <div className={styles.__container}>
                <header className={styles.__navigation}>
                    <div>
                        <img src ={logo} alt ="logo" className={styles.__logo}/>
                    </div>
                </header>
                <section className={styles.__container__body}>
                    <div className={styles.__container__text}>
                        <h1 className={styles.__title}>Bienvenidos a Skyscanner</h1>
                    </div>
                    <div className={styles.__container__enlace}>
                        <a href="#contacto" className={styles.__container__cta}>Conocenos</a>
                    </div>
                </section>
                <section className={styles.__container__gallery}>
                    <div className={styles.__container_img}>
                        <img src= {boreal} alt="Boreal" className={styles.__img}/>
                        <img src= {Australia} alt="Australia" className={styles.__img}/>
                        <img src= {playa} alt="Playa" className={styles.__img}/>
                        <img src= {Paris} alt="Paris" className={styles.__img}/>
                        <img src= {Egypt} alt="Egypt" className={styles.__img}/>
                        <img src= {Rio} alt="Rio" className={styles.__img}/>
                    </div>
                </section>
                <footer>
                    <div className={styles.__container__footer}>
                        <div className={styles.__container__input}>
                            <input type="email" className={styles.__container__input} id="usr" placeholder={"Write yor Email"}/>
                        </div>

                        <div className={styles.container__icon}>
                            <img src={facebook} alt="Facebook" className={styles.__container__icon}/>
                            <img src={instagram} alt="Instagram" className={styles.__container__icon}/>
                            <img src={twitter} alt="Twitter" className={styles.__container__icon}/>
                            <img src={youtube} alt="Youtube" className={styles.__container__icon}/>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );

}

export default LandingPages;