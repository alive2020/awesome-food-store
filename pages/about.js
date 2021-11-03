import React from 'react';
import Head from 'next/head';
import styles from '../styles/About.module.css';

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name='keywords' content='store, stores in seoul' />
      </Head>
      <div className={styles.main}>
        <h1>
          THE FIRST UNIQUE “POP-UP” SHOPPING PLACE MADE OF SHIPPING CONTAINER
        </h1>
        <p>
          On April 10, 2015, there was the opening of a creatively designed
          complex space, which composed of 200 shipping containers.
        </p>
        <p>
          COMMON GROUND is the largest container shopping mall in the world.
        </p>
        <p>
          COMMON GROUND is a young and innovative cultural platform that
          creatively connects a special brand and new experience.
        </p>
        <p>
          Beyond common ideas, we aim to create new and valuable activities
          through a creative connection of different ideas.
        </p>
      </div>
    </div>
  );
};

export default about;
