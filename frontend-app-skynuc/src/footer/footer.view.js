import React from 'react';
import styles from './footer.module.css';
import facebook from '../../src/assets/images/facebook.png';
import instagram from '../../src/assets/images/instagram-bosquejado.png';
import twitter from '../../src/assets/images/twitter.png';
import youtube from '../../src/assets/images/youtube.png';
import githut from '../assets/images/git.png';
import { Link } from 'react-router-dom';
import { USER_PROFILE } from '../routes/routes';




const Footer = () => {

    return(
    
        <footer>

           

                <div className={styles.__container__footer}>

                <Link to={USER_PROFILE}>
                    <div className={styles.__container__enlace_adm}>
                            <a href="Usuario_Admin">Acceder como user admin</a>   
                    </div>
                </Link>   

                    <div className={styles.container__icon}>
                        <a href="http://facebook.com/Skyscanner">
                            <img src={facebook} alt="Facebook" className={styles.__container__icon}/>
                        </a>
                        <a href="https://www.instagram.com/skyscanner_es/?hl=es">
                                <img src={instagram} alt="Instagram" className={styles.__container__icon}/>
                        </a>
                            
                        <a href="https://twitter.com/skyscanner_es">
                                <img src={twitter} alt="Twitter" className={styles.__container__icon}/>
                        </a>
                        <a href="https://www.youtube.com/watch?v=j4-hJuMaUas">
                                <img src={youtube} alt="Youtube" className={styles.__container__icon}/>
                        </a>
                        <a href="https://github.com/jaumeserr/Skyscanner-Nuclio">
                                <img src={githut} alt="Githut" className={styles.__container__icon}/>
                        </a>
                    </div>
                </div>
        </footer>
    );  
}

export default Footer;