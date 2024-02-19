import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MenuTabs from './src/navigation/MenuTabs';
export default function App() {
  return (
    <NavigationContainer>
      <MenuTabs />
    </NavigationContainer>
  );
}