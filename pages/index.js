import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome Food Store</title>
        <meta name='description' content='Awesome Food Stores in Seoul' />
        <meta
          name='keywords'
          content='web development, programming, nextjs, junior front-end developer '
        />
        <script
          src='https://unpkg.com/react/umd/react.production.min.js'
          crossorigin
        ></script>

        <script
          src='https://unpkg.com/react-dom/umd/react-dom.production.min.js'
          crossorigin
        ></script>

        <script
          src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js'
          crossorigin
        ></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Awesome Food Store</h1>
        <div>
          <img
            src='https://images.unsplash.com/photo-1619335680641-be403ad81621?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGx8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            alt='store image'
          />
        </div>
      </main>

      
    </div>
  );
}
