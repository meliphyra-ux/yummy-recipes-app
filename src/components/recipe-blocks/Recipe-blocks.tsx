import React, { FC } from 'react'
import { Recipe } from '../../utils/types'
import RecipeBlock from '../recipe-block/Recipe-block'

type RecipeBlocksProps = {
  recipes: Recipe[]
}

const RecipeBlocks: FC<RecipeBlocksProps> = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <RecipeBlock {...recipe} />
      ))}
    </div>
  )
}

export default RecipeBlocks