import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './assets/colors';
import CustomSlider from './CustomSlider';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.secondary,
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
        color: colors.primary,
        marginVertical: 1
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '200',
        color: colors.primary,
        marginTop: 8
    },
    interest:{
        width: 120,
        height: 170,
        borderRadius: 20,
        shadowColor: colors.primary,
        borderWidth: 2,
        borderColor: colors.sixth,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3%'
    },
    backbutton: {
        height: 60,
        alignSelf: 'flex-start',
        width: 60,
        backgroundColor: colors.primary,
        marginBottom: '11%',
        borderRadius: 40,
        marginTop: '25%'
    },
    next: {
        width: 75,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: '10%',
        marginRight: '5%'
    },
    buttontext: {
        color: colors.third,
        fontSize: 18,
        fontWeight: '700'
    }
})
const CustomCommunity2 = ({navigation}) => {

    const [sports,setSports] = useState(false);
    const [music, setMusic] = useState(false);
    const [entertainment, setEntertainment] = useState(false);
    return ( 
        <View style={styles.background}>
            <TouchableOpacity onPress={()=> navigation.navigate("Custom")} style={styles.backbutton}>
                        <Image style={{ marginLeft:'10%', marginTop:'15%', width: 40, height: 40, tintColor: colors.secondary}} source={require("./assets/images/back.png")}/>
            </TouchableOpacity>
            <View style={styles.form}>
                <View style={styles.header}> 
                    <Text style={styles.title}>
                        Select Your Interests
                    </Text>
                    <Text style={styles.subtitle}>
                        We want to get to know you better in order to reccemend the most suitable communities to you
                    </Text>
                </View>
                <View style={styles.body}> 
                    <View style={{flexDirection:'row'}}>
                    <Pressable onPress={()=> setSports(!sports)} style={({pressed}) => [{ backgroundColor: sports? colors.sixth :(pressed ? colors.sixth : colors.primary)}, styles.interest,]} >
                        <Image style={{width: 79, height: 79}} source = {require("./assets/images/sports.png")} />
                        <Text style= {[styles.subtitle,{color: colors.secondary, fontWeight: '800',fontSize:22}]}> Sports </Text>
                    </Pressable> 
                    <Pressable onPress={()=> setMusic(!music)} style={({pressed}) => [{ backgroundColor: music? colors.sixth :(pressed ? colors.sixth : colors.primary)}, styles.interest,]} >                       
                        <Image style={{width: 79, height: 79, tintColor:'purple'}} source = {require("./assets/images/music.png")} />
                        <Text style= {[styles.subtitle,{color: colors.secondary, fontWeight: '800',fontSize:22}]}> Music </Text>
                    </Pressable> 
                    </View>
                    <View style={{ alignItems: 'center'}}> 
                    <Pressable onPress={()=> setEntertainment(!entertainment)}  style={({pressed}) => [{ backgroundColor: entertainment? colors.sixth :(pressed ? colors.sixth : colors.primary)}, styles.interest, {width:138}]} >
                        <Image style={{width: 79, height: 60}} source = {require("./assets/images/tv.png")} />
                        <Text style= {[styles.subtitle,{color: colors.secondary, fontWeight: '800',fontSize:21, alignSelf: 'center'}]}> Movies & TV </Text>
                    </Pressable> 
                    </View>
                    <View style={{height: 100}}>

                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.next} onPress={()=> navigation.navigate("Custom3",{sports: sports, music: music, entertainment: entertainment})}>
                
                <View style={{flexDirection: 'row', justifyContent:"center",alignItems:'center'}}>
                <Text style = {styles.buttontext}>
                    {"Next"}
                </Text>
                <Image style={{width: 10,height:10}} source={require("./assets/images/next.png")}/>
                </View>
                
            </TouchableOpacity>
        </View>
     );
}
 
export default CustomCommunity2;