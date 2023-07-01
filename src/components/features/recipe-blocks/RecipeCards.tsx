import { FC } from 'react';

import { Recipe } from '~/utils/types';
import RecipeCard from '~/components/ui/recipe-card/RecipeCard';

import styles from './recipe-blocks.module.scss'

type RecipeBlocksProps = {
  recipes: Recipe[];
};

const RecipeCards: FC<RecipeBlocksProps> = ({ recipes }) => {
  return (
    <div className={styles['recipe-blocks-container']}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeCards;
