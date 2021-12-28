import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export function SideMenu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Calendar" component={HomeScreen} />
        <Drawer.Screen name="Baby Tracker" component={NotificationsScreen} />
        <Drawer.Screen name="Baby Food Receipes" component={NotificationsScreen} />
        <Drawer.Screen name="Reminders" component={NotificationsScreen} />
        <Drawer.Screen name="FAQs" component={NotificationsScreen} />
        <Drawer.Screen name="About" component={NotificationsScreen} />
        <Drawer.Screen name="Contact" component={NotificationsScreen} />
        <Drawer.Screen name="Terms & Conditions" component={NotificationsScreen} />
        <Drawer.Screen name="Logout" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}