import { FC } from 'react';
import { Recipe } from '../../utils/types';

const RecipeBlock: FC<Recipe> = ({
  id,
  yields,
  thumbnail_url,
  name,
  cook_time_minutes,
}) => {
  return <div>
    {id},
    {name}
    {cook_time_minutes}
  </div>;
};

export default RecipeBlock;
