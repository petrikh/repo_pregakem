// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';
import MMKVStorage from "react-native-mmkv-storage";
MMKV = new MMKVStorage.Loader().initialize();

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      console.log("SplashScreen");
     MMKV.getStringAsync("user_id").then((value)=>{
         console.log("storage response:",value);
        navigation.replace(
            value ?  'DrawerNavigationRoutes':'Auth'
          )
     });
    //   AsyncStorage.getItem('user_id').then((value) =>
    //     navigation.replace(
    //       value === null ? 'Auth' : 'DrawerNavigationRoutes'
    //     ),
    //   );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});