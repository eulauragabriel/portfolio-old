import React from 'react';
import styles from '@/styles/hobbies.module.css';

const Hobbies = () => {
    return (
        <div className={styles.Hobbies}>
            <h2>Bem-vindo à minha página de hobbies!</h2>
            <div className={styles.text}>
                <div>
                    <h2>Desenhos</h2>
                    <h4>Desde pequena, sempre gostei e tive bastante incentivo para desenhar. Esse hobbie me ajudou bastante a desenvolver minha criatividade.</h4>
                    <div className={styles['image-grid']}>
                        <img src="/images/desenhoI.jpg" alt="desenho" />
                        <img src="/images/desenhoII.jpg" alt="desenho" />
                        <img src="/images/desenhoIII.jpg" alt="desenho" />
                    </div>
                </div>
                <div>
                    <h2>Animes</h2>
                    <h4>Animes e mangás são uns dos meus passatempos favoritos, talvez seja por conta da minha paixão por desenhar mas as animações e ilustrações me prendem bastante.</h4>
                    <div className={styles['image-grid']}>
                        <img src="/images/animeI.jpg" alt="anime" />
                        <img src="/images/animeII.jpg" alt="anime" />
                        <img src="/images/animeIII.jpg" alt="anime" />
                    </div>
                </div>
                <div>
                    <h2>Livros</h2>
                    <h4>Gosto bastante de ler livros também, meus gêneros favoritos são os de mistério e fantasia.</h4>
                    <div className={styles['image-grid']}>
                        <img src="/images/livroI.jpg" alt="livro" />
                        <img src="/images/livroII.jpg" alt="livro" />
                        <img src="/images/livroIII.jpg" alt="livro" />
                    </div>
                </div>
                <div>
                    <h2>Documentários</h2>
                    <h4>Documentários no geral são algo que me prendem bastante, mas os de história, crimes reais e sobrenaturais são meus favoritos.</h4>
                    <div className={styles['image-grid']}>
                    <iframe 
                        src="https://www.youtube.com/embed/qg2nGY1aqlg" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                    <iframe 
                        src="https://www.youtube.com/embed/Sm31DGCX5SI?si=3BL794bBeywFj9Xg" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                    <iframe 
                        src="https://www.youtube.com/embed/IA2n-xPBYsU?si=q--tDF8-hD6cDfpH" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                    </div>
                </div>
                <div>
                    <h2>Viagens</h2>
                    <h4>Conhecer novos lugares e culturas é algo que me fascina, sempre que posso estou planejando a próxima viagem.</h4>
                    <div className={styles['image-grid']}>
                        <img src="/images/viagemI.jpg" alt="viagem" />
                        <img src="/images/viagemII.jpg" alt="viagem" />
                        <img src="/images/viagemIII.jpg" alt="viagem" />
                    </div>
                </div>
                <div>
                    <h2>Música</h2>
                    <h4>Escutar música é algo que faço diariamente, escuto diversos estilos de diversos idiomas.</h4>
                    <div className={styles['image-grid']}>
                        <iframe class="styled-iframe" src="https://open.spotify.com/embed/album/5XpEKORZ4y6OrCZSKsi46A?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe class="styled-iframe" src="https://open.spotify.com/embed/album/4yP0hdKOZPNshxUOjY0cZj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe class="styled-iframe" src="https://open.spotify.com/embed/album/7Ip9X7pnkhJ4cwDoBnvneD?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                    </div>
                </div>
                <div>
                    <h2>Estar com pessoas queridas</h2>
                    <h4>Por fim, estar com meu namorado, amigos e família é algo que prezo bastante, sempre que posso estou com eles.</h4>
                    <div className={styles['image-grid']}>
                        <img src="/images/queridosII.jpg" alt="queridos" />
                        <img src="/images/queridosI.jpg" alt="queridos" />
                        <img src="/images/queridosIII.jpg" alt="queridos" />
                    </div>
                    <div className={styles.imageContainerII}>
                <img src="/images/august.png" alt="" className={styles.imageRight} /> 
                </div>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;
