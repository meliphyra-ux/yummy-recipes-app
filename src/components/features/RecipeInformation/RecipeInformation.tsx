import { Recipe } from '~/utils/types';

import Divider from '~/components/ui/Divider/Divider';
import StyledRecipeInformation from './StyledRecipeInformation';

const RecipeInformation = ({ selectedRecipe }: { selectedRecipe: Recipe }) => {
  const { name, thumbnail_url, description, cook_time_minutes } =
    selectedRecipe;
  return (
    <StyledRecipeInformation>
      <img src={thumbnail_url} alt={name} width={250} height={250} />
      <div className="information">
        <h2>{name}</h2>
        <Divider />
        <p>{description}</p>
        <Divider />
        {cook_time_minutes && cook_time_minutes !== 0 ? (
          <p>{cook_time_minutes} minutes to make</p>
        ) : (
          <p>Easy to make!</p>
        )}
      </div>
    </StyledRecipeInformation>
  );
};

export default RecipeInformation;
