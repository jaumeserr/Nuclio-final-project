import React from 'react';
import styles from './landing.module.css'
import SearchBox from 'components/searchBox/searchBox.view';
import piclanding from '../../assets/images/piclanding.png';





const Landing = () => {


    return (

    <div className={styles.__wrapper}>

        <div className={styles.__container}>
            <h1>Find the best flight and save</h1>
            <SearchBox/>
            <img src={piclanding} alt="Piclanding" className={styles.__container__piclanding}/>
        </div>         
            
     </div>
        

    );
}

export default Landing;