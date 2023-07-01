import { useState } from 'react';
import styles from './navigation-menu.module.scss';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuButtons = () => {
    setIsMenuOpen((state) => !state);
  };
  return (
    <nav className={styles.navigation}>
      <i
        onClick={handleMenuButtons}
        className="fa-solid fa-bars fa-lg"
        style={{ color: '#171717' }}
      ></i>
      <ul
        className={styles['menu-buttons']}
        style={{
          display: isMenuOpen ? 'flex' : 'none',
        }}
      >
        <Link to="/recipes"><li>Recipes</li></Link>
        <Link to="/contacts"><li>Contacts</li></Link>
        <li>In progress🛠️</li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
