import { FC } from 'react';
import { Recipe } from '~/utils/types';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import ImageCircle from '../ImageCircle/ImageCircle';
import StyledRecipeCardContainer from './StyledRecipeCardContainer';

const RecipeCard: FC<Recipe> = ({ thumbnail_url, name, description }) => {
  return (
    <StyledRecipeCardContainer className="recipe-block-container">
      <div className="recipe-image-container">
        <LazyLoadImage
          src={thumbnail_url}
          alt={name}
          placeholderSrc="./while-loading.webp"
        />
      </div>
      <div className="recipe-information-container">
        <ImageCircle
          src="https://illustrations.popsy.co/amber/chef-serving-food.svg"
          alt="Chef serving food"
          $size="50px"
          $top="-25px"
          $right="25px"
        />
        <h3>{name}</h3>
        {description ? (
          <p>{description.split(' ').slice(0, 8).join(' ') + '...'}</p>
        ) : (
          <p>Try out this recipe</p>
        )}
      </div>
    </StyledRecipeCardContainer>
  );
};

export default RecipeCard;
