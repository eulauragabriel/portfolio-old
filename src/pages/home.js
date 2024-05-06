import React from 'react';
import styles from '@/styles/home.module.css';

const Home = () => {
    return (
        <div className={styles.Home}>
            <h2 className={styles.text}>Seja bem-vindo!</h2>
            <div className={styles.image}>
                <img src="/images/callmeifyougetlostid (2).png" alt="id" />
            </div>
            <div className={styles.text}>
                <p>Meu nome é Laura, sou Desenvolvedora de Software e esse é o meu portfólio!</p>
                <p>Aqui você irá encontrar um pouco sobre mim, meus hobbies, projetos e tecnologias que utilizo.</p>
        </div>
        </div>
    );
};

export default Home;