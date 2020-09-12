import React from 'react';
import styles from './footer.module.css'
import facebook from '../../assets/images/face1.svg';
import instagram from '../../assets/images/insta.png';
import twitter from '../../assets/images/twitter1.png';
import vector from '../../assets/images/vector.png';
import { Link } from 'react-router-dom';
import { USER_PROFILE } from '../../routes/routes';


const Footer = () => {

    return(


        
            <div className={styles.__container__footer}>
                    
                    <div className={styles.__logo}>
                        <img src={vector} alt="Vector" className={styles.__container__icon}/>
                        <p>skyreader</p>
                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</p>


                    <div className={styles.container__icon}>
                            <a href="http://facebook.com/Skyscanner">
                            <img src={facebook} alt="Facebook" className={styles.__container__icon} />
                            </a>
                            <a href="https://www.instagram.com/skyscanner_es/?hl=es">
                                <img src={instagram} alt="Instagram" className={styles.__container__icon}/>
                            </a>
                            <a href="https://twitter.com/skyscanner_es">
                                <img src={twitter} alt="Twitter" className={styles.__container__icon}/>
                            </a>
                    </div>
                        <Link to={USER_PROFILE}>
                            <div className={styles.__container__enlace_adm}>
                                <a href="Usuario_Admin">Acceder como usuario admin</a>
                            </div>
                        </Link>
            
            </div>
        



    );
}

export default Footer;