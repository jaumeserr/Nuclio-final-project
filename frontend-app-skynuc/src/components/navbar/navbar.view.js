import React from 'reafct';
import styles from './navbar.module.css'
import user from '/user-circle-solid.png'


const navbar = () ={
    return (
        <div className={style_container}>
        <h1>Skyscanner</h1>
        <img className={styles._image} src={user} />
        </div>
    );
}
export default Navbar; 