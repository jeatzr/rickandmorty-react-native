import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllCharactersScreen from './screens/AllCharactersScreen';
const Tab = createBottomTabNavigator();

export default function MenuTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Characters" component={AllCharactersScreen} />
    </Tab.Navigator>
  );
}