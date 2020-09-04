import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 0386371faf1a6896c8f9be780faf12b24c5ad4c6
import styles from './home.module.css';
// import { SRLWrapper } from 'simple-react-lightbox';
// import boreal from '../../assets/images/boreal.jpg';
// import Australia from '../../assets/images/Australia.jpg';
// import playa from '../../assets/images/playa.jpg';
// import Paris from '../../assets/images/Paris.jpg';
// import Egypt from '../../assets/images/Egytp.jpg'
// import Rio from '../../assets/images/Rio.jpg'
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import { SRLWrapper } from 'simple-react-lightbox';
import Australia from '../../assets/images/Australia.jpg';
import boreal from '../../assets/images/boreal.jpg';
import Egypt from '../../assets/images/Egytp.jpg';
>>>>>>> origin/develop
=======
>>>>>>> 0386371faf1a6896c8f9be780faf12b24c5ad4c6
import facebook from '../../assets/images/facebook.png';
import githut from '../../assets/images/git.png';
import instagram from '../../assets/images/instagram-bosquejado.png';
import twitter from '../../assets/images/twitter.png';
import youtube from '../../assets/images/youtube.png';
import Navbar from '../../components/navbar/navbar.view';
<<<<<<< HEAD
<<<<<<< HEAD
// import { SRLWrapper } from 'simple-react-lightbox';
import { Link } from 'react-router-dom';
import ButtonFlightSearch from '../../components/buttonflightsearch/buttonflightsearch.view';
=======
import SearchBox from '../../components/searchBox/searchBox.view';
>>>>>>> origin/develop
=======
import { Link } from 'react-router-dom';
import SearchBox from '../../components/searchBox/searchBox.view';
>>>>>>> 0386371faf1a6896c8f9be780faf12b24c5ad4c6
import { FLIGHT_LIST } from '../../routes/routes';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.__container}>
                <section className={styles.__container__body}>
                    <SearchBox />
<<<<<<< HEAD
<<<<<<< HEAD
                    <Link to={FLIGHT_LIST}><ButtonFlightSearch/></Link>
=======
=======

>>>>>>> 0386371faf1a6896c8f9be780faf12b24c5ad4c6
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
<<<<<<< HEAD
>>>>>>> origin/develop
=======
>>>>>>> 0386371faf1a6896c8f9be780faf12b24c5ad4c6
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
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className={styles.__container__enlace_adm}>
                            <a href="Usuario_Admin">Usuario_Admin</a>
                            
=======
                        <div className={styles.__container__input}>
                            <input
                                type="email"
                                className={styles.__container__input}
                                id="usr"
                                placeholder={'Write yor Email'}
                            />
>>>>>>> origin/develop
=======

                        <div className={styles.__container__enlace_adm}>
                            <a href="Usuario_Admin">Usuario_Admin</a>
                            
>>>>>>> 0386371faf1a6896c8f9be780faf12b24c5ad4c6
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
