import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './assets/colors';
import CustomSlider from './CustomSlider';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const viewConstants = {
    containerTopMargin: '10%',
    containerBottomMargin: '16%',
    containerHorizontalMargins: '7%',
    headingFontSize: 34,
    headingWeight: '800',
    headingFontSizeLandscape: 34,
    headerBottomMargin: 5,
    textSize: 15,
    textSizeLandscape: 18,
    headerTextLandscapePadding: 80,
    labelPadding: 10,
    textBoxBorderWidth: 2,
    textBoxBorderRadius: 13,
    textBoxPadding: 10,
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.primary,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7%',
        flex: 1,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',       
    },
    header: {
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        height: '30%',
        marginBottom: '10%'
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        color: colors.secondary,
        marginVertical: 14
    },
    subtitle: {
        fontSize: 15,
    },
    body: {
        flexDirection: 'column'
    },
    category: {
        flexDirection: 'row',
        margin: '4%'
    },
    label:{
        fontSize: 18,
        marginTop: 6,
    },
    textinput: {
        borderWidth: 1,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: colors.fourth,
        borderRadius: viewConstants.textBoxBorderRadius,
        textAlign: 'center',
        shadowColor: 'grey',
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.3,
        width: 200,
        padding: viewConstants.textBoxPadding,
        fontSize:  viewConstants.textSize,
        marginHorizontal: viewConstants.textBoxPadding,
        color: 'black',
        
    },
    genderbutton: {
        width: '20%',
        height: '100%',
        borderRadius: 10,
        borderColor: colors.secondary,
        borderWidth: 2,
    },
    buttontext: {
        color: colors.fourth
    },  
    icon: {
        width: 20,
        height: 20,
        marginTop: 8,
        marginLeft: 5,
    }
})
const CustomCommunity = () => {

    const [acceptAge, setAcceptAge ] = useState(true);
    const [acceptGender, setAcceptGender] = useState(true);
    const [acceptCountry, setAcceptCountry] = useState(true);
    const [acceptOccupation, setAcceptOccupation] = useState(true);
    const [age,setAge] = useState(-1);
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [occupation, setOccupation] = useState('');
    return ( 
        <View style={styles.background}>
            <SafeAreaView style = {styles.form}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Find Your Tribe
                    </Text>
                    <View style={styles.subheader}>
                        <Text style={styles.subtitle}>
                            Tell us some facts about you so that we can find communities of people similar to you. If any of the following things don't matter to you, you can press the red button next to it.
                        </Text>
                    </View>
                </View>
                <View style ={styles.body}> 
                    <View style={styles.category}>
                        <Text style={[{color: acceptAge? 'black' : 'grey' },styles.label]}> Age: </Text>
                        <TextInput
                            keyboardType = 'number-pad'
                            style = {styles.textinput}
                            onChangeText = { age => setAge(age) }
                            editable = {acceptAge? true: false}
                            placeholder="Enter your age in years" />
                        <TouchableOpacity onPress={ () => setAcceptAge(!acceptAge)}> 
                            <Image style={styles.icon} source = { acceptAge? require("./assets/images/minus.png") : require("./assets/images/plus.png") }/> 
                        </TouchableOpacity>
                    </View>
                    <View style={styles.category}>
                    <Text style={[{color: acceptGender? 'black' : 'grey' },styles.label]}> Gender: </Text>
                        <Pressable 
                            onPress={() => setGender('male')}
                            style={[styles.genderbutton, {backgroundColor: (gender=="male") ? colors.secondary : colors.fifth}]}>
                            <Text style={styles.buttontext}> Male </Text>
                        </Pressable> 
                        <Pressable 
                            onPress={() => setGender('female')}
                            style={[styles.genderbutton, {backgroundColor: (gender=="female") ? colors.secondary : colors.fifth}]}>
                            <Text style={styles.buttontext}> Female </Text>
                        </Pressable>
                        <Pressable 
                            onPress={() => setGender('none')}
                            style={[styles.genderbutton, {backgroundColor: (gender=="none") ? colors.secondary : colors.fifth}]}>
                            <Text style={styles.buttontext}> Non-Binary </Text>
                        </Pressable>
                    <TouchableOpacity onPress={ () => {setAcceptGender(!acceptGender); setGender('')}}> 
                            <Image style={styles.icon} source = { acceptGender? require("./assets/images/minus.png") : require("./assets/images/plus.png") }/> 
                    </TouchableOpacity>
                    </View> 
                    <View style={styles.category}>

                    </View> 
                    <View style={styles.category}>
                        <Text style = {styles.label}> Occupation: </Text>
                        <Picker
                        style = {{width: 100, height: 20}}
                        selectedValue={occupation}
                        enabled = {acceptOccupation? true:false }
                        onValueChange={(itemValue, itemIndex) => setOccupation(itemValue)
                        }>
                            <Picker.Item label="Education" value="male" />
                            {/* Change these values for backend */}
                            <Picker.Item label="Engineering" value="female" />
                            <Picker.Item label="Non-Binary" value="none" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Non-Binary" value="none" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Non-Binary" value="none" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Non-Binary" value="none" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Non-Binary" value="none" />
                        </Picker>
                    </View> 

                </View>
            </SafeAreaView>
        </View>
     );
}
 
export default CustomCommunity;