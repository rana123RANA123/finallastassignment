import React from 'react'
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
function About({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Setting')}
        title="Go to notifications"
      />
    </View>
  );
}

function Contact({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Graph() {
  return (
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
  );
}