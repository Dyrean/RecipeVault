import { Steps } from './steps';

export type Instructions = {
  id: string;
  recipeId: string;
  steps: Steps[];
};
