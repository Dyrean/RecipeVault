import React from 'react';
import { Image } from 'react-native';
import { MotiView, MotiText } from 'moti';

type Props = {
  recipe: any;
};

export const RecipeCard = ({ recipe }: Props) => {
  const {
    image = '',
    title = '',
    instructions: { steps },
  } = recipe;
  return (
    <MotiView>
      <MotiView>
        <Image
          source={{
            uri: `${image}`,
          }}
        />
        <MotiView>
          <MotiText>{title}</MotiText>
          {steps.map((step: any) => {
            step.ingredients.map((ingredient: any) => {
              console.log(ingredient.ingredient.name);
            });
          })}
        </MotiView>
      </MotiView>
    </MotiView>
  );
};
