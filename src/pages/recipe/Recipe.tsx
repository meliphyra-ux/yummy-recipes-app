import { useContext, useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { Recipe as RecipeType } from '~/utils/types';
import { fetchAPIData } from '~/utils/api';

import { RecipesContext } from '~/contexts/RecipesContext';

import StyledRecipe from './StyledRecipe';
import Loader from '~/components/ui/loader/Loader';
import Divider from '~/components/ui/Divider/Divider';
import Instruction from '~/components/features/Instruction/Instruction';

const instructions = (instructions: any[]) =>
  instructions.map((instruction, id) => (
    <Instruction
      key={id + 1}
      text={instruction.display_text}
      orderNumber={id + 1}
    />
  ));

const Recipe = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeType | null>(null);
  const { recipes } = useContext(RecipesContext);
  const { id } = useParams();

  useEffect(() => {
    const selectedRecipe = recipes.filter(
      (recipe) => recipe.id === +(id ?? 0)
    )[0];
    if (selectedRecipe) setSelectedRecipe(selectedRecipe);
    else
      fetchAPIData<RecipeType>({
        endpoint: '/recipes/get-more-info',
        params: { id: +(id ?? 0) },
      }).then((data) => {
        if (data instanceof Error) throw new Error(data.message);
        setSelectedRecipe(data);
      });
  });

  return (
    <>
      {selectedRecipe === null ? (
        <Loader />
      ) : (
        <StyledRecipe>
          <div>
            <img
              src={selectedRecipe.thumbnail_url}
              alt={selectedRecipe.name}
              width={250}
              height={250}
            />
            <div className="information">
              <h2>{selectedRecipe.name}</h2>
              <Divider />
              <p>{selectedRecipe.description}</p>
              <Divider />
              {selectedRecipe.cook_time_minutes !== 0 && (
                <p>{selectedRecipe.cook_time_minutes} minutes to make</p>
              )}
            </div>
          </div>

          {selectedRecipe.instructions.length > 0 && (
            <div className="instructions">
              {instructions(selectedRecipe.instructions)}
            </div>
          )}
        </StyledRecipe>
      )}
    </>
  );
};

export default Recipe;
