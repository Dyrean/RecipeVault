import { Equipment } from './equipment';

export type StepsOnEquipment = {
  stepId: string;
  equipmentId: string;
  temperatureNumber: number | null;
  temperatureUnit: string | null;
  equipment: Equipment;
};
