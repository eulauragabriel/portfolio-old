import Navbar from './navbar';
import Footer from './footer';
import styles from '../styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;