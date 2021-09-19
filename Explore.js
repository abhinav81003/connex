import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent,ScrollView, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './assets/colors';
import Slider from '@react-native-community/slider';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CommmunityCard from './CommunityCard';
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
        alignContent: 'center',
        marginTop : -60     
    },
    header: {
        alignItems: 'flex-start',
        textAlign: 'left',
        marginTop: '18%',
        width: '100%',
        height: '13%',
        marginBottom: '15%'
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        color: colors.third,
        marginVertical: 1
    },
    allCommunities: {
        flex:1,
        alignSelf: 'center',
        flexDirection: 'column',
        width: 400,
        marginLeft: 40,
        marginBottom: 100,
        marginTop: -30
    },
    searchBar: {
        flexDirection: 'row',
        width: 290,
        marginTop: '1%',
        height: 20,
        marginLeft: '2%',
        flex: 1,
        marginTop: '5%',
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: 'grey',
        backgroundColor: colors.primary
    },
    searchIcon: {
        alignSelf: 'center',
        marginLeft: 10,
        tintColor: 'black',
        paddingRight: 10,
    },
    searchInput: {
        marginLeft: 50
    },
    button: {
        width: '59%',
        marginBottom: 100,
        marginTop: -70,
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
    },
    backbutton: {
        height: 60,
        alignSelf: 'flex-start',
        width: 60,
        backgroundColor: colors.secondary,
        marginBottom: '11%',
        borderRadius: 40,
        marginTop: '10%'
    }
})
const Explore = ({navigation}) => {
    //get data from the database and python script
    // can use useEffect to get data when the page is launched
    const suggestedCommunities = [ {"name": "Community1","description":"The best community","icon":"https://images.shoefabs.com/pp-7ce24c0a/l/7dd30f678951bd/Rockport-Womens-Tm-Kaiya-Sling-Pump-Black-Patent-7dd30f678951bd.jpg"},{"name": "Community2","description":"The second best community","icon":""},{"name": "Community3","description":"The third best community","icon":""},{"name": "Community3","description":"The third best community","icon":""},{"name": "Community3","description":"The third best community","icon":""},{"name": "Community3","description":"The third best community","icon":""}];
    return ( 
        <View style={styles.background}>
            <TouchableOpacity onPress={()=> navigation.navigate("Suggestions")} style={styles.backbutton}>
                        <Image style={{ marginLeft:'10%', marginTop:'15%', width: 40, height: 40, tintColor: colors.primary}} source={require("./assets/images/back.png")}/>
            </TouchableOpacity>
            <View style={styles.form}>
                <View style={styles.header}> 
                    <Text style={styles.title}>
                        All Communities
                    </Text>
                    <View style = {styles.searchBar}>
                            <Image style={styles.searchIcon} source={require('./assets/images/search.png')}/>
                            <TextInput style = {styles.searchInput}
                                        placeholder= "Search Communities"
                                        /> 
                    </View>
                </View>
                <ScrollView  directionalLockEnabled={true} style={styles.allCommunities}>
                    {suggestedCommunities.map((community) => {
                        return (
                            <CommmunityCard key={suggestedCommunities.indexOf(community)} priority={suggestedCommunities.indexOf(community)} name={community.name} description = {community.description} icon = {community.icon} />
                        );
                    })} 
                </ScrollView>

                <TouchableOpacity onPress={()=> navigation.navigate("Create")} style={styles.button}>
                    <Text style= {styles.buttonText}>
                        Create a New Community
                    </Text>
                </TouchableOpacity >
            </View>
        </View>
     );
}
 
export default Explore;