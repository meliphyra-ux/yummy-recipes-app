import { Link } from 'react-router-dom';

import NavigationMenu from '~/components/features/NavigationMenu/Navigation-menu';
import StyledHeader from './StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>Yummy!</h1>
      </Link>
      <NavigationMenu />
    </StyledHeader>
  );
};

export default Header;
