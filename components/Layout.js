import StoreNav from './StoreNav';
import styles from '../styles/Home.module.css';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <StoreNav />
      <div className='styles.container'>
        <main className='{styles.main'>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
