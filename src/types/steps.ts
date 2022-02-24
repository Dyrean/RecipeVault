import { StepsOnIngredient } from './stepsOnIngredient';
import { StepsOnEquipment } from './stepsOnEquipment';

export type Steps = {
  id: string;
  number: number;
  step: string;
  instructionsId: string | null;
  length: number | null;
  lengthType: string | null;
  ingredients: StepsOnIngredient[];
  equipments: StepsOnEquipment[];
};
