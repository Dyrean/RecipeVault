import { mocks } from '../../mock/recipes.mock';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { RecipeCard } from '../../components/RecipeCard/recipe-card.component';

export const RecipesScreen = () => {
  const [recipes] = useState<any[]>(mocks.data);

  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => {
        return <RecipeCard recipe={item} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};
