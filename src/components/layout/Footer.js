import {  FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa"

import styles from './Footer.module.css'

function Footer(){

    return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>




            <li>

            <FaLinkedin />

            </li>


            <li>

         <FaYoutube />

         </li>


            <li>

            <FaInstagram />

            </li>


            <li>

            <FaWhatsapp/>

            </li>





            <li>

            <FaGithub />

            </li>




        </ul>

            <p className={styles.copy_right}><span>Costs</span> &copy;2024</p>

    </footer>)


}



export default Footer