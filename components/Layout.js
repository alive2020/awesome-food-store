import StoreNav from './StoreNav';
import styles from '../styles/Home.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <StoreNav />
      <div className='styles.container'>
        <main className='{styles.main'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
