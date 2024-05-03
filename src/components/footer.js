import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <div className='footer'>
        <footer className={styles.footer}>
            <div className={styles.container}>
                <a href="mailto:eulauragabriel@gmail.com" target="_blank" rel="noreferrer" className={styles.link}>
                    <i className="fas fa-envelope"></i> E-mail
                </a>
                <a href="https://instagram.com/eulauragabriel" target="_blank" rel="noreferrer" className={styles.link}>
                    <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://www.linkedin.com/in/eulauragabriel/" target="_blank" rel="noreferrer" className={styles.link}>
                    <i className="fab fa-linkedin"></i> Linkedin
                </a>
                <a href="https://github.com/eulauragabriel" target="_blank" rel="noreferrer" className={styles.link}>
                    <i className="fab fa-github"></i> GitHub
                </a>
            </div>
            <p className={styles.text}>© 2024 Laura Gabriel Gonçalves - Todos os direitos reservados</p>
        </footer>
        </div>
    );
};

export default Footer;