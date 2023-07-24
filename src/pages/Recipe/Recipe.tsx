import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Recipe as RecipeType } from '~/utils/types';
import { fetchAPIData } from '~/utils/api';

import { RecipesContext } from '~/contexts/RecipesContext';

import StyledRecipe from './StyledRecipe';
import Loader from '~/components/ui/Loader/Loader';
import Instruction from '~/components/features/Instruction/Instruction';
import RecipeInformation from '~/components/features/RecipeInformation/RecipeInformation';

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
    if (selectedRecipe) {
      setSelectedRecipe(selectedRecipe);
      document.title = selectedRecipe.name + ' - Yummy!';
    } else {
      fetchAPIData<RecipeType>({
        endpoint: '/recipes/get-more-info',
        params: { id: +(id ?? 0) },
      }).then((data) => {
        if (data instanceof Error) throw new Error(data.message);
        setSelectedRecipe(data);
        document.title = data.name + ' - Yummy!';
      });
    }

    return () => {
      document.title = 'Yummy!';
      setSelectedRecipe(null);
    };
  }, []);

  return (
    <StyledRecipe>
      {selectedRecipe === null ? (
        <Loader />
      ) : (
        <>
          <RecipeInformation selectedRecipe={selectedRecipe} />
          {selectedRecipe.instructions.length > 0 && (
            <div className="instructions">
              {instructions(selectedRecipe.instructions)}
            </div>
          )}
        </>
      )}
    </StyledRecipe>
  );
};

export default Recipe;
