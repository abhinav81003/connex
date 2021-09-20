import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent,ScrollView, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './assets/colors';
import Slider from '@react-native-community/slider';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CommmunityCard from './CommunityCard';
import Explore from './Explore';
import Feed from './Feed';

const styles = StyleSheet.create({
    TabStyle: {
        // borderColor: colors.border,
        // borderWidth: 1,
        shadowColor: colors.shadow,
        shadowRadius: 10,
        // backgroundColor: colors.tab_background
    },
});
const Home = ({navigation}) => {
    
    const BottomTabs = createBottomTabNavigator();
    return ( 
        <BottomTabs.Navigator initialRoute="Home" 
          unmountOnBlur= {true}
            barStyle= {{ backgroundColor: 'black' }}
            tabBarOptions={{ 
            unmountOnBlur: true,
            keyboardHidesTabBar: true,
            activeTintColor: colors.secondary,
            tabStyle: TabStyle,
            labelStyle: TabLabelStyle,
            showIcon: true,
            showLabel: Platform.OS === 'web' ? true: true,
        }}>
            <BottomTabs.Screen name="Home" component={Feed} 
                initialParams={{isItDark: isDarkModeEnabled}}
                params = {{ isItDark: isDarkModeEnabled }}
                options={{   
                unmountOnBlur: true,
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name = "home" size={size} color = {color} />),
            }}/>
            <BottomTabs.Screen name="Home" component={Explore} 
                initialParams={{isItDark: isDarkModeEnabled}}
                params = {{ isItDark: isDarkModeEnabled }}
                options={{   
                unmountOnBlur: true,
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name = "home" size={size} color = {color} />),
            }}/>
            <BottomTabs.Screen name="Home" component={HomeStackNav} 
                initialParams={{isItDark: isDarkModeEnabled}}
                params = {{ isItDark: isDarkModeEnabled }}
                options={{   
                unmountOnBlur: true,
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name = "home" size={size} color = {color} />),
            }}/>

        </BottomTabs.Navigator>
     );
}
 
export default Home;