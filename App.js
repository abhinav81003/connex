import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Welcome';
import SignupScreen2 from './SignupScreen2';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Suggestions from './Suggestions';
import CustomCommunity2 from './CustomCommunity2';
import CustomCommunity from './CustomCommunity';
import CustomComunity3 from './CustomCommunity3';
import Explore from './Explore';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="Welcome" screenOptions={{
                
            }}>
               <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
               <Stack.Screen name="Suggestions" component={Suggestions} options={{headerShown: false}} />
              <Stack.Screen name="Signup 2" component={SignupScreen2} options={{headerShown: false}} />
              <Stack.Screen name="Custom" component={CustomCommunity} options={{headerShown: false}} />
              <Stack.Screen name="Custom2" component={CustomCommunity2} options={{headerShown: false}} />
              <Stack.Screen name="Custom3" component={CustomComunity3} options={{headerShown: false}} />
             
              <Stack.Screen name="Explore" component={Explore} options ={{headerShown: false}} />
              <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}} />
              <Stack.Screen name= "Home" component ={HomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
