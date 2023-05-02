import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import {Path} from './constants/navigation/navigation';
import {RootStackParamList} from './models/screens';
const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screensOptions.generic}
        initialRouteName={Path.Welcome}>
        <Stack.Screen name={Path.Welcome} component={Welcome} />
        <Stack.Screen name={Path.Login} component={Login} />
        <Stack.Screen name={Path.Register} component={Register} />
        <Stack.Screen
          name={Path.Home}
          component={Home}
          options={screensOptions.home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screensOptions = {
  generic: {
    headerTitle: () => null,
    headerTransparent: true,
  },
  home: {
    header: () => null,
  },
};

export default App;
