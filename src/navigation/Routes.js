import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../pages/HomeScreen';
import UserPostsScreen from '../pages/UserPostsScreen';
import SplashScreen from '../pages/SplashScreen'; 
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from '../config';

const CustomHeader = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: () => <CustomHeader title="Users List" />,
            headerStyle: { backgroundColor: Constants.white },
          }}
        />
        <Stack.Screen
          name="UserPosts"
          component={UserPostsScreen}
          options={{
            headerTitle: () => <CustomHeader title="User Posts" />,
            headerStyle: { backgroundColor: Constants.white },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: Constants.black,
    fontWeight: "500",
  },
});

export default Routes;
