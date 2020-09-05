import React from 'react';
import styles from './home.module.css';
// import boreal from '../../assets/images/boreal.jpg';
// import Australia from '../../assets/images/Australia.jpg';
// import playa from '../../assets/images/playa.jpg';
// import Paris from '../../assets/images/Paris.jpg';
// import Egypt from '../../assets/images/Egytp.jpg'
// import Rio from '../../assets/images/Rio.jpg'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.view';
import SearchBox from '../../components/searchBox/searchBox.view';
import { FLIGHT_LIST } from '../../routes/routes';
import Footer from '../../footer/footer.view';

    const Home = () => {
        return (
        <div className={styles.__wrapper}>
            <Navbar/>
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

                <Footer/>
            </div>
        </div>
    );

}

export default Home;


{/* Seccion comentada por el momento no se usara  */}

                {/* <section className={styles.__container__gallery}>
                    <div className={styles.__container_img}>
                        <h2>Our Work</h2>
                        <SRLWrapper>
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
                        </SRLWrapper>
                    </div>
                </section> */}