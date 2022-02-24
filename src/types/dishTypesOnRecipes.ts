import { DishType } from './dishType';

export type DishTypesOnRecipes = {
  recipeId: string;
  dishTypeId: string;
  dishType: DishType;
};
