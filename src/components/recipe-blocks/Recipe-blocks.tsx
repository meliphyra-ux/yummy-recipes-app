import { FC } from 'react';

import { Recipe } from '../../utils/types';
import RecipeBlock from '../recipe-block/Recipe-block';

import styles from './recipe-blocks.module.scss'

type RecipeBlocksProps = {
  recipes: Recipe[];
};

const RecipeBlocks: FC<RecipeBlocksProps> = ({ recipes }) => {
  return (
    <div className={styles['recipe-blocks-container']}>
      {recipes.map((recipe) => (
        <RecipeBlock key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeBlocks;
