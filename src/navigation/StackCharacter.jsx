import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllCharactersScreen from '../screens/AllCharactersScreen';
import CharacterDetails from '../screens/CharacterDetails';

const CharacterStack = createNativeStackNavigator();

export default function StackCharacter() {
  return (
    <CharacterStack.Navigator>
      <CharacterStack.Screen
        name="AllCharacters"
        component={AllCharactersScreen}
      />
      <CharacterStack.Screen
        name="CharacterDetails"
        component={CharacterDetails}
      />


    </CharacterStack.Navigator>
  )
}
