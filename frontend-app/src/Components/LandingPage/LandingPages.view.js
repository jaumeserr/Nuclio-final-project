import React from 'react';
import styles from './LandingPages.module.css';
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
import githut from '../../assets/git.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub }from '@fortawesome/free-brands-svg-icons';
import Header from "../Header/HeaderLanding.view";


    const submit = () => {
        alert("hola");
    }
    const LandingPages = () => {
        return (
        <div>
            <div className={styles.__container}>
                <Header/>
                <section className={styles.__container__body}>
                    <div className={styles.__container__text}>
                        <h1 className={styles.__title}>Welcome to Skyscanner</h1>
                    </div>
                    <div className={styles.__container__enlaceflight}>
                        <button type={"submit"}  onClick={submit} value="Vuelos" className= {styles.__container__button}>Flights</button>
                    </div>
                </section>

                <section className={styles.__container__gallery}>
                    <div className={styles.__container_img}>
                        <a href="#imagen1">
                           <img src= {boreal} alt="Boreal" className={styles.__img}/>
                        </a>
                        <a href ="#imagen2">
                            <img src= {Australia} alt="Australia" className={styles.__img}/>
                        </a>
                        <a href="#imagen3">
                            <img src= {playa} alt="Playa" className={styles.__img}/>
                        </a>
                        <a href={"#imagen4"}>
                            <img src= {Paris} alt="Paris" className={styles.__img}/>
                        </a>
                        <a href={"#imagen5"}>
                            <img src= {Egypt} alt="Egypt" className={styles.__img}/>
                         </a>
                        <a href={"#imagen6"}>
                        <img src= {Rio} alt="Rio" className={styles.__img}/>
                        </a>
                    </div>
                </section>
                <footer>
                    <div className={styles.__container__footer}>
                        <div className={styles.__container__input}>
                            <input type="email" className={styles.__container__input} id="usr" placeholder={"Write yor Email"}/>
                        </div>

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
            </div>
        </div>
    );

}

export default LandingPages;