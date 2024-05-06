import React from 'react';
import styles from '@/styles/tecnologias.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faPython, faLinux, faGithub, faNode, faReact, faJs, faJava, faMdb, faDatabase } from '@fortawesome/free-brands-svg-icons';

const Tecnologias = () => {
    return (
        <div className={styles.Tecnologias}> 
            <div className={styles.text}>
                <h2>Reconhecimentos</h2>
                <p>Fui oradora na minha formatura do ensino médio e recebi algumas medalhas e bolsa parcial durante os ensinos fundamental e médio por bom desempenho escolar.</p>
            </div>
            <div className={styles.text}>
                <h2>Cursos e Idiomas</h2>
                <p>Conhecimento de nível básico de excel, básico de espanhol (A1-A2) e avançado de inglês (C1-C2).</p>
            </div>
            <div className={styles.text}>
                <h2>Tecnologias</h2>
                <p>Atualmente estou aprendendo a utilizar ferramentas e linguagens como HTML5, CSS3, MySQL, Python, Linux, Github, NodeJS, React, JavaScript, TypeScript, Java, MongoDB e Redis na faculdade.</p>
                </div>
                <div className={styles.icons}>
                    <FontAwesomeIcon icon={faHtml5} />
                    <FontAwesomeIcon icon={faCss3} />
                    <FontAwesomeIcon icon={faDatabase} />
                    <FontAwesomeIcon icon={faPython} />
                    <FontAwesomeIcon icon={faLinux} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faNode} />
                    <FontAwesomeIcon icon={faReact} />
                    <FontAwesomeIcon icon={faJs} />
                    <FontAwesomeIcon icon={faJava} />
                    <FontAwesomeIcon icon={faMdb} />
                    <FontAwesomeIcon icon={faDatabase} />
                    <br/>
                </div>
            </div>
    );
};

export default Tecnologias;