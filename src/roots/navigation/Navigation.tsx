import { Link } from 'react-router-dom';
import NavigationMenu from '../../components/navigation-menu/Navigation-menu';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Yummy!</h1>
      </Link>
      <NavigationMenu />
    </header>
  );
};

export default Navigation;
