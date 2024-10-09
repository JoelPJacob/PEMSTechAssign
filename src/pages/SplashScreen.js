import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>
      <Image
        source={require('../assets/images/splash.png')} 
        style={styles.splashImage}
      />
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>User List Task</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080', 
  },
  splashImage: {
    width: 150, 
    height: 150, 
    marginBottom: 20, 
    borderRadius:75
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 20, 
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C0C0C0',
  },
});

export default SplashScreen;
