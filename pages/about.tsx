import Head from 'next/head';
import styles from '../styles/Home.module.css';

const About = () => {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <div className={styles.container}>
                <h1>About</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, nihil esse? Sit accusamus dolorem ex ipsa sint natus maxime atque sapiente, eius, ut voluptates consequatur iste. Beatae doloribus eligendi iure rerum in perspiciatis ad exercitationem ratione, adipisci incidunt mollitia nulla libero cumque numquam voluptatibus commodi nobis a? Eligendi, earum ut!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, nihil esse? Sit accusamus dolorem ex ipsa sint natus maxime atque sapiente, eius, ut voluptates consequatur iste. Beatae doloribus eligendi iure rerum in perspiciatis ad exercitationem ratione, adipisci incidunt mollitia nulla libero cumque numquam voluptatibus commodi nobis a? Eligendi, earum ut!</p>
            </div>
        </>
      );
}

export default About;
