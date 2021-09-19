import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './assets/colors';
import CustomSlider from './CustomSlider';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CommmunityCard from './CommunityCard';
import { NavigationContainer } from '@react-navigation/native';

const styles=StyleSheet.create({
    background: {
        backgroundColor: colors.primary,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7%',
        paddingTop: '10%',
        flex: 1,
        height: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',       
    },
    header: {
        alignItems: 'flex-start',
        textAlign: 'left',
        marginTop: '18%',
        width: '100%',
        height: '24%',
        marginBottom: '1%'
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        color: colors.third,
        marginVertical: 1
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '200',
        color: colors.secondary,
        marginTop: 8
    },
    allSuggestions: {
        marginTop: -70
    },
    button: {
        width: '59%',
        marginBottom: 100,
        marginTop: -120,
        backgroundColor: colors.secondary,
        opacity: 0.75,
        height: "7%",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    buttonText: {
        color: colors.primary,
        fontWeight: '700',
        padding: "5%"
    }
})
const Suggestions = ({navigation}) => {

    //get data from the database and python script
    // can use useEffect to get data when the page is launched
    const suggestedCommunities = [ {"name": "Community1","description":"The best community","icon":"https://images.shoefabs.com/pp-7ce24c0a/l/7dd30f678951bd/Rockport-Womens-Tm-Kaiya-Sling-Pump-Black-Patent-7dd30f678951bd.jpg"},{"name": "Community2","description":"The second best community","icon":""},{"name": "Community3","description":"The third best community","icon":""}];
    return ( 
        <View style={styles.background}>
            <View style={styles.form}>
                <View style={styles.header}> 
                    <Text style={styles.title}>
                        Suggested Communities For You
                    </Text>
                </View>
                <View style={styles.allSuggestions}>
                    {suggestedCommunities.map((community) => {
                        return (
                            <CommmunityCard key={suggestedCommunities.indexOf(community)} priority={suggestedCommunities.indexOf(community)} name={community.name} description = {community.description} icon = {community.icon} />
                        );
                    })} 
                </View>

                <TouchableOpacity onPress={()=> navigation.navigate("Explore")} style={styles.button}>
                    <Text style= {styles.buttonText}>
                        Explore All Communities
                    </Text>
                </TouchableOpacity >
            </View>
        </View>
     );
}
 
export default Suggestions;