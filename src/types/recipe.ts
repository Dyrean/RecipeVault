import { DishTypesOnRecipes } from './dishTypesOnRecipes';
import { Instructions } from './instructions';

export type Recipe = {
  id: string;
  title: string;
  servings: number;
  image: string;
  summary: string;
  dishTypes: DishTypesOnRecipes[];
  instructions: Instructions;
};
