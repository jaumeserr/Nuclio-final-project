import React from 'react';

import styles from './home.module.css';
// import { SRLWrapper } from 'simple-react-lightbox';
// import boreal from '../../assets/images/boreal.jpg';
// import Australia from '../../assets/images/Australia.jpg';
// import playa from '../../assets/images/playa.jpg';
// import Paris from '../../assets/images/Paris.jpg';
// import Egypt from '../../assets/images/Egytp.jpg'
// import Rio from '../../assets/images/Rio.jpg'
import facebook from '../../assets/images/facebook.png';
import githut from '../../assets/images/git.png';
import instagram from '../../assets/images/instagram-bosquejado.png';
import twitter from '../../assets/images/twitter.png';
import youtube from '../../assets/images/youtube.png';
import Navbar from '../../components/navbar/navbar.view';
import { Link } from 'react-router-dom';
import SearchBox from '../../components/searchBox/searchBox.view';
import { FLIGHT_LIST } from '../../routes/routes';
import styles from './home.module.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.__container}>
                <section className={styles.__container__body}>
                    <SearchBox />

                    <Link to={FLIGHT_LIST}>
                        <button
                            type="submit"
                            className="button button--blue"
                            style={{
                                border: '1px solid',
                            }}
                        >
                            Flight List
                        </button>
                    </Link>
                </section>

                {/* Seccion comentada por el momento no se usara  */}

                {/* <section className={styles.__container__gallery}>
                    <div className={styles.__container_img}>
                        <h2>Our Work</h2>
                        <SRLWrapper>
                            <a href="#imagen1">
                                <img src={boreal} alt="Boreal" className={styles.__img} />
                            </a>
                            <a href="#imagen2">
                                <img src={Australia} alt="Australia" className={styles.__img} />
                            </a>
                            <a href="#imagen3">
                                <img src={playa} alt="Playa" className={styles.__img} />
                            </a>
                            <a href={'#imagen4'}>
                                <img src={Paris} alt="Paris" className={styles.__img} />
                            </a>
                            <a href={'#imagen5'}>
                                <img src={Egypt} alt="Egypt" className={styles.__img} />
                            </a>
                            <a href={'#imagen6'}>
                                <img src={Rio} alt="Rio" className={styles.__img} />
                            </a>
                        </SRLWrapper>
                    </div>
                </section> */}
                <footer>
                    <div className={styles.__container__footer}>

                        <div className={styles.__container__enlace_adm}>
                            <a href="Usuario_Admin">Usuario_Admin</a>
                            
                        </div>
                        <div className={styles.container__icon}>
                            <a href="http://facebook.com/Skyscanner">
                                <img
                                    src={facebook}
                                    alt="Facebook"
                                    className={styles.__container__icon}
                                />
                            </a>
                            <a href="https://www.instagram.com/skyscanner_es/?hl=es">
                                <img
                                    src={instagram}
                                    alt="Instagram"
                                    className={styles.__container__icon}
                                />
                            </a>
                            <a href="https://twitter.com/skyscanner_es">
                                <img
                                    src={twitter}
                                    alt="Twitter"
                                    className={styles.__container__icon}
                                />
                            </a>
                            <a href="https://www.youtube.com/watch?v=j4-hJuMaUas">
                                <img
                                    src={youtube}
                                    alt="Youtube"
                                    className={styles.__container__icon}
                                />
                            </a>
                            <a href="https://github.com/jaumeserr/Skyscanner-Nuclio">
                                <img
                                    src={githut}
                                    alt="Githut"
                                    className={styles.__container__icon}
                                />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;
