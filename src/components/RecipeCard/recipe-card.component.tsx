import React from 'react';
import { Steps } from '../../types/steps';
import { Recipe } from '../../types/recipe';
import { Dimensions } from 'react-native';
import { Box, HStack, Text, VStack, Image } from 'native-base';

type Props = {
  recipe: Recipe;
};

export const RecipeCard = ({ recipe }: Props) => {
  const {
    image = '',
    title = '',
    instructions: { steps },
  } = recipe;
  return (
    <Box
      rounded="md"
      width="90%"
      maxWidth="95%"
      height={Dimensions.get('screen').width / 2}
      alignSelf="center"
      backgroundColor="amber.100"
    >
      <HStack justifyContent="space-between" space="2">
        <Image
          source={{
            uri: image,
          }}
          alt={title}
          height={Dimensions.get('screen').width / 2}
          rounded="lg"
          width={Dimensions.get('screen').width / 2}
        />
        <VStack space="2" width={Dimensions.get('screen').width / 2} alignContent="center">
          <Text fontSize="md">{title}</Text>
          {steps.map((step: Steps) => {
            step.ingredients.map((ingredient) => {
              console.log(ingredient.ingredient.name);
            });
          })}
        </VStack>
      </HStack>
    </Box>
  );
};
