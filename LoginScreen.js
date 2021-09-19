import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import colors from './assets/colors';

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.primary,
    }
})
const LoginScreen = () => {
    return ( 
        <View style={StyleSheet.background}>

        </View>
     );
}
 
export default LoginScreen;