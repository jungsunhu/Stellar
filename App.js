import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import SpaceCraftScreen from "./screens/SpaceCraft";
import StarMapsScreen from "../screens/StarMaps";
import DailyPicScreen from "../screens/DailyPic";

const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{
headerShown: false
}}>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="StarMaps" component={StarMapsScreen} />
<Stack.Screen name="DailyPic" component={DailyPicScreen} /> 
<Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
</Stack.Navigator>
</NavigationContainer>
 );
};
export default App;
