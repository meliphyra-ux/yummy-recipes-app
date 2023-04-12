import NavigationMenu from '../../components/navigation-menu/Navigation-menu';
import styles from './navigation.module.scss'

const Navigation = () => {
  return (
    <header className={styles.header}>
      <h1>Yummy!</h1>
      <NavigationMenu />
    </header>
  );
};

export default Navigation;
