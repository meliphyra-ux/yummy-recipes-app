import styled from 'styled-components';
import { colors, popAnimation } from '~/utils/_mixins';

const StyledRecipeCardContainer = styled.article`
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;

  position: relative;

  cursor: pointer;

  ${popAnimation}

  border-radius: 10px;
  box-shadow: 1px 1px 10px #000000;

  .recipe-image-container {
    width: 100%;
    aspect-ratio: 1/1;

    overflow: hidden;

    border-radius: 10px;

    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      transition: all 0.4s ease-in-out;
    }
  }
  .recipe-information-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${colors.primary};
    color: ${colors.secondary};

    position: relative;

    width: 100%;
    height: 40%;

    padding: 25px 20px;

    border-radius: 0 0 10px 10px;

    opacity: 1;
    transition: bottom 0.15s ease-in-out;

    img {
      opacity: 0;

      position: absolute;
      top: -25px;
      right: 25px;

      width: 50px;
      height: 50px;

      border-radius: 50%;

      box-shadow: 1px 1px 10px ${colors.primary};

      transition: all 0.2s ease-in-out;
    }
  }

  p {
    height: 2.5rem;
  }

  &:hover {
    .recipe-information-container {
      img {
        opacity: 1;
      }
    }
    .recipe-image-container {
      img {
        filter: grayscale(0);
        transform: scale(1.15);
      }
    }
  }
`;

export default StyledRecipeCardContainer;
