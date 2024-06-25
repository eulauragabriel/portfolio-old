import React, { useEffect } from 'react';
import styles from '@/styles/projetos.module.css';

const Projetos = () => {
    useEffect(() => {
        document.title = 'Projetos';
    }, []);
    
  return (
    <div className={styles.projetos}>
    <div className={styles.text}>
      <div>
        <h4>Trabalhei como consultora de vendas para o'Boticário e como vendedora para a Rihappy. Foram duas experiências que auxiliaram muito no desenvolvimento das minhas soft skills. Hoje tenho muito mais empatia, melhor comunicação e trabalho melhor em equipe.</h4>
        <h4>Além disso, também tenho alguns projetos envolvendo meu hobbie de ilustrações.</h4>
        <h4>Atualmente estou realizando um projeto de Iniciação Tecnológica no INPE relacionado à processamento de imagens com a temática "Cobertura de solo e classificação utilizando processamento de imagem e inteligência artificial".</h4>
        <h4>Confira abaixo alguns dos meus projetos:</h4>
      </div>
      <div className={styles.images}>
        <a href="https://github.com/eulauragabriel/site-unes" target="_blank">
          <img src="/images/projetoI.png" alt="site unes" width="30%" />
          <h4>UNES: Um site educacional com recursos interativos desenvolvido por mim para a aula de Desenvolvimento Web I.</h4>
          <h4>hard skills:
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>MySQL</li>
              <li>Docker</li>
              <li>Python</li>
            </ul>
          </h4>
          <h4>soft skills:
            <ul>
              <li>Autonomia</li>
            </ul>
          </h4>
        </a>
        <a href="https://github.com/eulauragabriel/portfolio" target="_blank">
          <img src="/images/projetoII.png" alt="site portfolio" width="30%" />
          <h4>Portfólio: Uma coleção pessoal de trabalhos e ilustrações desenvolvido por mim para a aula de Design Digital.</h4>
          <h4>hard skills:
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </h4>
          <h4>soft skills:
            <ul>
              <li>Autonomia</li>
              <li>Estimativa de prazo</li>
            </ul>
          </h4>
        </a>
        <a href="https://github.com/Equipe-CodeLand/API-2023.1" target="_blank">
          <img src="/images/projetoIII.png" alt="site api 1° semestre" width="30%" />
          <h4>API 1° Semestre: Um site desenvolvido pela minha equipe sobre Covid Longa no qual participei do time de desenvolvimento.</h4>
        <h4>hard skills:
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ChartJS</li>
            <li>Python</li>
            <li>Flask</li>
            <li>MySQL</li>
          </ul>
        </h4>
        <h4>soft skills:
          <ul>
            <li>Comunicação</li>
            <li>Trabalho em equipe</li>
            <li>Empatia</li>
            <li>Autonomia</li>
          </ul>
        </h4>
        </a>
      </div>
      <div className={styles.images}>
        <a href="https://github.com/Equipe-CodeLand/API-2023.2" target="_blank">
          <img src="/images/projetoIV.png" alt="site api 2° semestre" width="30%" />
          <h4>API 2° Semestre: Um site de Gerenciamento de Chamadas desenvolvido pela minha equipe no qual participei do time de desenvolvimento.</h4>
          <h4>hard skills:
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>TypeORM</li>
              <li>MySQL</li>
              <li>React</li>
              <li>NodeJS</li>
            </ul>
          </h4>
          <h4>soft skills:
            <ul>
              <li>Comunicação</li>
              <li>Trabalho em equipe</li>
              <li>Empatia</li>
              <li>Autonomia</li>
            </ul>
          </h4>
        </a>
        <a href="https://github.com/leticiacarvalho04/WB/tree/atvi5-wb" target="_blank">
          <img src="/images/projetoV.png" alt="site wb" width="30%" />
          <h4>Projeto WB: Um site destinado à uma empresa fictícia World Beauty desenvolvido por mim e por uma colega para a aula de Tecnicas de Programação I</h4>
          <h4>hard skills:
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          soft skills:
            <ul>
              <li>Comunicação</li>
              <li>Trabalho em equipe</li>
              <li>Autonomia</li>
            </ul>
          </h4>
        </a>
        <a href="https://github.com/eulauragabriel/desenvolvimento-web-II/tree/main/lista_03" target="_blank">
          <img src="/images/projetoVI.png" alt="site lista03" width="30%" />
          <h4>Crud de Músicas: Um crud desenvolvido por mim para aula de Desenvolvimento Web II.</h4>
          <h4>hard skills:
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MySQL</li>
            </ul>
          </h4>
          <h4>soft skills:
            <ul>
              <li>Autonomia</li>
              <li>Estimativa de prazo</li>
            </ul>
          </h4>
        </a>
      </div>
      <div className={styles.images}>
        <a href="https://github.com/Equipe-CodeLand/API-2024.1" target="_blank">
          <img src="/images/projetoVII.png" alt="site api 2024.1" width="30%" />
          <h4>API 2024.1: Um site desenvolvido pela minha equipe sobre um sistema de Gerenciamento de Ativos para a empresa YouTan no qual participei do time de desenvolvimento.</h4>
          <h4>hard skills:
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>MySQL</li>
            </ul>
          </h4>
          <h4>soft skills:
            <ul>
              <li>Comunicação</li>
              <li>Trabalho em equipe</li>
              <li>Empatia</li>
              <li>Autonomia</li>
              <li>Estimativa de prazo</li>
              <li>Comunicação com cliente externo</li>
            </ul>
          </h4>
        </a>
        <a href=""></a>
        <a href=""></a>
        </div>
      <div>
        <h4>Para saber mais sobre meus projetos relacionados à programação clique <a href="https://github.com/eulauragabriel" target="_blank"><b>aqui</b></a> para abrir meus repositórios no GitHub!</h4>
      </div>
      <div className={styles.imageContainerII}>
                <img src="/images/mirrorball.png" alt="" className={styles.imageRight} /> 
      </div>
    </div>
    </div>
  );
}

export default Projetos;
