import React from 'react';
import styles from './home.module.css';
import Navbar from '../../components/navbar/navbar.view';
import Landing from '../../components/landing/landing.view';
import Footer from '../../components/footer/footer.view';


    const Home = () => {
        return (
            
        <div className={styles.__wrapper}>
            <Navbar/>   
            <Landing/>   
            <Footer/> 
        </div>
    );

}

export default Home;








{/* <Link to={FLIGHT_LIST}>
<button
    type="submit"
    className="button button--blue"
    style={{
        border: '1px solid',
    }}
>
    Flight List
</button>
</Link> */}





