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
            <h4>Contribuições pessoais: Desenvolvi o site completo, criei e gerenciei o banco de dados e configurei o Docker para garantir que o ambiente de desenvolvimento fosse replicável e eficiente. Evoluí bastante na parte de comunicação pois foi bem difícil me adaptar as novas tecnologias e precisei me comunicar bastante com professores e colegas.</h4>
            <h4>Hard skills: Trabalhei com HTML, CSS, MySQL, Docker e Python para construir e otimizar o projeto.</h4>
            <h4>Soft skills: Desenvolvi autonomia, pois trabalhei de forma independente para completar o projeto.</h4>
          </a>
          <a href="https://github.com/eulauragabriel/portfolio" target="_blank">
            <img src="/images/projetoII.png" alt="site portfolio" width="30%" />
            <h4>Portfólio: Uma coleção pessoal de trabalhos e ilustrações desenvolvido por mim para a aula de Design Digital.</h4>
            <h4>Contribuições pessoais: Além de desenvolver o site, trabalhei intensamente no design, aplicando conceitos que aprendi durante o curso. Foi uma experiência muito desafiadora mas que me ajudou a perceber que me identificava bastante com a parte de frontend.</h4>
            <h4>Hard skills: Usei HTML, CSS e JavaScript para trazer o design à vida.</h4>
            <h4>Soft skills: Aprimorei minha autonomia e habilidades de estimativa de prazo, gerenciando meu tempo de forma eficaz.</h4>
          </a>
          <a href="https://github.com/Equipe-CodeLand/API-2023.1" target="_blank">
            <img src="/images/projetoIII.png" alt="site api 1° semestre" width="30%" />
            <h4>API 1° Semestre: Um site desenvolvido pela minha equipe sobre Covid Longa no qual participei do time de desenvolvimento.</h4>
            <h4>Contribuições pessoais: Realizei pesquisas detalhadas sobre Covid Longa, desenvolvi partes do site e ajudei a construir o banco de dados. Lidamos com requisições de um cliente e tivemos que nos adaptar bastante pois tivemos muitos desafios como a dificuldade para fazer raspagem de dados no site que utilizamos como base e a falta de dados muito precisos sobre o assunto.</h4>
            <h4>Hard skills: Trabalhei com HTML, CSS, JavaScript, ChartJS, Python, Flask e MySQL para criar um site funcional e informativo.</h4>
            <h4>Soft skills: Fortaleci minha comunicação e capacidade de trabalho em equipe, além de desenvolver empatia ao lidar com um tema tão sensível.</h4>
          </a>
        </div>
        <div className={styles.images}>
          <a href="https://github.com/Equipe-CodeLand/API-2023.2" target="_blank">
            <img src="/images/projetoIV.png" alt="site api 2° semestre" width="30%" />
            <h4>API 2° Semestre: Um site de Gerenciamento de Chamadas desenvolvido pela minha equipe no qual participei do time de desenvolvimento.</h4>
            <h4>Contribuições pessoais: Fui responsável pelo desenvolvimento do site, criação do README.md no GitHub e gerenciamento do banco de dados. Este projeto foi uma experiência muito desafiadora pois foi um desenvolvido um sistema mais complexo com CRUDs, o entendimento do TypeORM foi bastante complexo e a conexão entre frontend e backend também foi um desafio.</h4>
            <h4>Hard skills: Utilizei HTML, CSS, JavaScript, TypeScript, TypeORM, MySQL, React e NodeJS para desenvolver o projeto.</h4>
            <h4>Soft skills: Melhorei minhas habilidades de comunicação e trabalho em equipe, além de desenvolver empatia e autonomia.</h4>
          </a>
          <a href="https://github.com/leticiacarvalho04/WB/tree/atvi5-wb" target="_blank">
            <img src="/images/projetoV.png" alt="site wb" width="30%" />
            <h4>Projeto WB: Um site destinado à uma empresa fictícia World Beauty desenvolvido por mim e por uma colega para a aula de Tecnicas de Programação I.</h4>
            <h4>Contribuições pessoais: Desenvolvi o site em dupla e trabalhei na implementação da linguagem TypeScript.Foi um projeto grande para uma matéria da faculdade e bastante trabalhoso, principalmente na questão de desenvolver todo o backend e todo o frontend.</h4>
            <h4>Hard skills: Utilizei HTML, CSS, JavaScript e TypeScript para criar um site funcional e esteticamente agradável.</h4>
            <h4>Soft skills: Aprimorei minhas habilidades de comunicação e trabalho em equipe, além de desenvolver maior autonomia.</h4>
          </a>
          <a href="https://github.com/eulauragabriel/desenvolvimento-web-II/tree/main/lista_03" target="_blank">
            <img src="/images/projetoVI.png" alt="site lista03" width="30%" />
            <h4>Crud de Músicas: Um CRUD desenvolvido por mim para aula de Desenvolvimento Web II.</h4>
            <h4>Contribuições pessoais: Desenvolvi o site, criei e gerenciei o banco de dados e implementei funcionalidades em JavaScript, NodeJS e Express. Foi um projeto que me auxiliou muito na questão de aprendizado de JavaScript e Express, pois foi um CRUD bem completo e anteriormente estava tendo bastante dificuldade com as tecnologias.</h4>
            <h4>Hard skills: Trabalhei com HTML, CSS, JavaScript, NodeJS, Express e MySQL para completar o projeto.</h4>
            <h4>Soft skills: Fortaleci minha autonomia e minha habilidade de estimar prazos e cumpri-los.</h4>
          </a>
        </div>
        <div className={styles.images}>
          <a href=""></a>
          <a href="https://github.com/Equipe-CodeLand/API-2024.1" target="_blank">
            <img src="/images/projetoVII.png" alt="site api 2024.1" width="30%" />
            <h4>API 2024.1: Um site desenvolvido pela minha equipe sobre um sistema de Gerenciamento de Ativos para a empresa YouTan no qual participei do time de desenvolvimento.</h4>
            <h4>Contribuições pessoais: Desenvolvi o site, gerenciei o banco de dados, implementei cadastros com TypeScript e Java e trabalhei na padronização do projeto. Neste projeto aprendi muito sobre padronização em código principalmente na parte da linguagem Java, foi um grande desafio até mesmo na parte da adaptação de uma IDE nova. A parte de ter um cliente externo também agregou bastante pois tivemos a oportunidade de conversar e entender as necessidades de um cliente real.</h4>
            <h4>Hard skills: Utilizei HTML, CSS, JavaScript, React, NodeJS e MySQL para criar um sistema robusto e eficiente.</h4>
            <h4>Soft skills: Melhorei minha comunicação, trabalho em equipe, empatia, autonomia, estimativa de prazo e habilidade de comunicação com clientes externos.</h4>
          </a>
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
