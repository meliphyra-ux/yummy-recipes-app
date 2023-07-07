import { styled } from 'styled-components';
import { colors } from '~/utils/_mixins';

export const StyledNavigationMenuContainer = styled.nav`
  cursor: pointer;

  i {
    color: ${colors.accent};

    @media screen and (min-width: 576px) {
      display: none;
    }
  }
`;

export const StyledMenuButtons = styled.ul<{ $isMenuOpen: boolean }>`
  position: absolute;
  top: 4.25rem;
  right: 0;
  z-index: 100;

  display: ${(props) => (props.$isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;

  background-color: ${colors.secondary};
  border: 1px solid ${colors.primary};

  width: 7.75rem;
  padding: 1.5rem;

  animation-name: opacity;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  a {
    text-decoration: none;
  }

  a:not(:first-of-type),
  p {
    margin-top: 0.75rem;
  }

  li {
    font-size: 1rem;

    color: ${colors.primary};

    list-style: none;
    border-bottom: 1px transparent solid;

    transition: border-bottom 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid ${colors.accent};
    }
  }

  @media screen and (min-width: 576px) {
    width: 20rem;

    display: flex !important;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;

    position: relative;
    top: 0;

    a,
    p {
      margin-top: 0 !important;
    }
  }
`;
