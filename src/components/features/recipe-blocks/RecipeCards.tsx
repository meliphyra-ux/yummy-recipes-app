import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { RecipesContext } from '~/contexts/RecipesContext';

import RecipeCard from '~/components/ui/recipe-card/RecipeCard';

import styles from './recipe-blocks.module.scss'


const RecipeCards = () => {
  const { recipes } = useContext(RecipesContext)
  return (
    <div className={styles['recipe-blocks-container']}>
      {recipes.map((recipe) => (
        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
          <RecipeCard {...recipe} />
        </Link>
      ))}
    </div>
  );
};

export default RecipeCards;
