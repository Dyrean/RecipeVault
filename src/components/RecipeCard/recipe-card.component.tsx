import React from 'react';
import { MotiView, MotiText, MotiImage } from 'moti';

type Props = {
  recipe: any;
};

export const RecipeCard = ({ recipe }: Props) => {
  const { image = '', title = '' } = recipe;
  return (
    <MotiView>
      <MotiImage
        source={{
          uri: `${image}`,
        }}
      />
      <MotiView>
        <MotiText>{title}</MotiText>
      </MotiView>
    </MotiView>
  );
};
