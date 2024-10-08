import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../pages/HomeScreen';
import UserPostsScreen from '../pages/UserPostsScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Users List' }}
        />
        <Stack.Screen
          name="UserPosts"
          component={UserPostsScreen}
          options={{ title: 'User Posts' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
