import piclanding from 'assets/images/piclanding.png';
import Footer from 'components/footer/footer.view';
import SearchBox from 'components/searchBox/searchBox.view';
import React from 'react';
import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.__wrapper}>
            <div className={styles.__container}>
                <h1>Find the best flight and save</h1>
                <SearchBox />
                <img src={piclanding} alt="pic landing" className={styles.__image} />
            </div>
            <div className={styles.__footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
