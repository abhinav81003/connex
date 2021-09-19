import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './assets/colors';
import CustomSlider from './CustomSlider';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const CommunityCard = (props) => {
    const styles = StyleSheet.create({
        background: {
            backgroundColor: colors.secondary,
            opacity: (1-0.13*(props.priority)),
            height: "18%",
            borderRadius: 20,
            marginVertical: 14,
            marginHorizontal: 10,
            width: 340,
            shadowColor: 'grey',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.3,
        },
        verticalPane: {
            flexDirection: 'column'
        },
        intro: {
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        },  
        icon: {
            width: 40,
            height: 40,
            borderRadius: 20,
            alignSelf: 'flex-start'
        },
        name: {
            fontSize: 25,
            marginLeft:'5%',
            alignSelf: 'flex-start',
            fontWeight: '500',
            color: colors.primary,
            marginVertical: 1
        },
        join:{
            marginLeft: '5%',
            borderColor: colors.sixth,
            borderWidth: 1,
            borderRadius: 20,
            width: 70,
            height: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary
        },
        jointext: {
            color: colors.secondary,
            fontSize: 14,
            fontWeight: '600'
        },
        description:{
            alignContent: 'center',
            justifyContent: 'center',
            width: 300,
            flexDirection: 'row',
            padding: 10
        },
        descriptionText:{
            color:colors.primary,
            fontSize: 14,
            fontWeight: '400'
        }

    })
    return ( 
        <View style={styles.background}>
            <View style={styles.verticalPane}>
                <View style= {styles.intro}>
                    <TouchableOpacity style= {styles.intro}>
                        <Image style= {styles.icon} source={{uri: props.icon}} />
                    <Text style={styles.name}>
                        {props.name}
                    </Text>
                    </TouchableOpacity>   
                    <TouchableOpacity style={styles.join}>
                        <Text style={styles.jointext}>
                            + Join
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.description}>
                    <Text style = {styles.descriptionText}>
                        {props.description}
                    </Text>
                </View>
            </View>
        </View>
     );
}
 
export default CommunityCard;