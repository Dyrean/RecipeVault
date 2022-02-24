import { Ingredient } from './ingredient';

export type StepsOnIngredient = {
  stepId: string;
  ingredientId: string;
  amount: number;
  unit: string;
  ingredient: Ingredient;
};
