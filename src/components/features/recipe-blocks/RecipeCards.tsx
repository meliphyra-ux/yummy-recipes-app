import { useContext } from 'react';

import { RecipesContext } from '~/contexts/RecipesContext';

import RecipeCard from '~/components/ui/recipe-card/RecipeCard';

import styles from './recipe-blocks.module.scss'


const RecipeCards = () => {
  const { recipes } = useContext(RecipesContext)
  return (
    <div className={styles['recipe-blocks-container']}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeCards;
