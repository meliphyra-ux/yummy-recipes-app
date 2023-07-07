import { useState } from 'react';

import LinkButton from '~/components/ui/link-button/LinkButton';
import {
  StyledMenuButtons,
  StyledNavigationMenuContainer,
} from './StyledNavigationMenu';

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuButtons = () => {
    setIsMenuOpen((state) => !state);
  };

  return (
    <StyledNavigationMenuContainer>
      <i onClick={handleMenuButtons} className="fa-solid fa-bars fa-lg" />
      <StyledMenuButtons $isMenuOpen={isMenuOpen}>
        <LinkButton to="/recipes" title="Recipes" />
        <LinkButton to="/contacts" title="Contacts" />
        <p>On dev stage🛠️</p>
      </StyledMenuButtons>
    </StyledNavigationMenuContainer>
  );
};

export default NavigationMenu;
