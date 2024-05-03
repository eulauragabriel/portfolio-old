import React from 'react';
import Layout from '@/components/layout';
import styles from '@/styles/home.module.css';

const About = () => {
    return (
        <div className={styles.about}>
                <p>Meu nome é Laura, tenho 19 anos e estou cursando o segundo semestre de Desenvolvimento de Software
                    Multiplataforma na Fatec Prof. Jessen Vidal.
                    Possuo diversos hobbies, consigo me adaptar bem a novos ambientes e faço amizades com facilidade. Sempre
                    disposta a aprender mais.
                </p>
                <p>Gosto bastante de sair, viajar e estar com os meus amigos e família.
                    Aos finais de semana não há nada melhor do que sair da rotina!</p>
                <p>Tenho alguns hobbies aos quais sempre dedico algum tempo. Alguns exemplos são: desenhar, assistir
                    documentários sobrenaturais e de crimes reais, anime, vôlei, ler, correr, aprender novas línguas e
                    fotografar.</p>
                <p>Você consegue ver mais sobre clicando <a href="hobbies"><b>AQUI</b></a>!</p>
            </div>
    );
};

export default About;
