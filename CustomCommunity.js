import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './assets/colors';
import CustomSlider from './CustomSlider';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const countryList = ["Select Country", "Afghanistan","Albania","Algeria","Andorra","Argentina","Australia","Austria","Bahamas","Bangladesh","Belgium","Bhutan","Botswana","Brazil","Cambodia","Cameroon","Canada","Chad","Chile","China","Colombia","Estonia","Egypt","Equador","France","Finland","Fiji","Gabon","Germany","Ghana","Greece","Guatemala","Haiti","Hungary","Iceland","India","Indonesia","Iran","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Laos","Lebanon","Liberia","Malaysia","Myanmar","Nepal","New Zealand","North Korea","Norway","Oman","Pakistan","Paraguay","Peru","Portugal","Philippines","Singapore","Slovakia","Sri Lanka","Sudan","Switzerland","Thailand","Uganda","United Arab Emirates","United Kingdom","United States of America","Uruguay","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
const occupationList = [ "Select Category","Business Executive", "Science and Engineering", "Healthcare Professional", "Manager or Administrator","Education Professional","Entertainment Professional", "Student", "Agricultural or Forestery", "Armed Forces or Police", "Other"]
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
        paddingTop: '30%',
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
        height: '24%',
        marginTop: '55%'
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        color: colors.secondary,
        marginVertical: 6
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '200',
        color: colors.third,
        marginVertical: 8
    },
    body: {
        flexDirection: 'column',
        alignItems: 'center',

    },
    category: {
        flexDirection: 'column',
        margin: '4%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    label:{
        fontSize: 17,
        fontWeight: '300'
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
        width: 290,
        padding: viewConstants.textBoxPadding,
        fontSize:  viewConstants.textSize,
        marginHorizontal: viewConstants.textBoxPadding,
        color: colors.secondary,
        
    },
    genderbutton: {
        marginHorizontal: '1%',
        marginTop: '2%',
        height: '45%',
        borderRadius: 10,
        shadowColor: 'grey',
        textAlignVertical: 'center',
        justifyContent: 'center',
        width: 100,
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.3,
        alignContent: 'center',
        alignItems: 'center'
    },
    nonegenderbutton: {
        marginHorizontal: '1%',
        height: '39%',
        borderRadius: 10,
        shadowColor: 'grey',
        marginTop: '-10%',
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.3,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontext: {
        color: colors.fourth
    },  
    occupationButton: {
        width: 290,
        height: 42,
        borderWidth: 1,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: colors.fourth,
        borderRadius: viewConstants.textBoxBorderRadius,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.3,
        marginRight: 10
    },  
    icon: {
        width: 20,
        height: 20,
        marginTop: 0,
        marginLeft: 5,
    },
    picker: {
        width: 300,
        height: 80,
        alignSelf: 'center'
    },
    occupationselecter: {
        marginBottom: "111%",
        marginLeft: '6%',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    countryselecter: {
        marginBottom: "139%",
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    nextbutton: {
        height: 60,
        alignSelf: 'flex-end',
        width: 60,
        backgroundColor: colors.secondary,
        marginBottom: '20%',
        borderRadius: 40,
        marginRight: '3%'
        
    },
})
const CustomCommunity = ({navigation}) => {

    const [acceptAge, setAcceptAge ] = useState(true);
    const [acceptGender, setAcceptGender] = useState(true);
    const [acceptCountry, setAcceptCountry] = useState(true);
    const [acceptOccupation, setAcceptOccupation] = useState(true);
    const [age,setAge] = useState(-1);
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState(0);
    const [occupation, setOccupation] = useState(0);
    const [selectOccupation, setSelectOccupation] = useState(false);
    const [selectCountry, setSelectCountry] = useState(false);
    
    //send data to backend 
    const handleNextPress =() => {
        //send age,country,gender,occupation

        navigation.navigate("Custom2");
    }

    const AgeAndGender = () => {
        return (
            <View> 
            <View style={styles.category}>
                        <View style={{ paddingBottom: '3%', flexDirection:'row'}}> 
                        <Text style={[{color: acceptAge? 'black' : 'grey' },styles.label]}> Age: </Text>
                        <TouchableOpacity onPress={ () => {setAcceptAge(!acceptAge);setAge(0) }}> 
                            <Image style={styles.icon} source = { acceptAge? require("./assets/images/minus.png") : require("./assets/images/plus.png") }/> 
                        </TouchableOpacity>
                        </View>
                        <TextInput
                            keyboardType = 'number-pad'
                            style = {styles.textinput}
                            value ={acceptAge? age: ''}
                            onChangeText = { age => setAge(age) }
                            editable = {acceptAge? true: false}
                            placeholder="Your age in years" /> 
                    </View>
                    <View style={[styles.category,{marginTop: -40}]}>
                    <View style={{ paddingBottom: '3%', flexDirection:'row'}}> 
                    <Text style={[{color: acceptGender? 'black' : 'grey' },styles.label]}> Gender: </Text>
                    <TouchableOpacity onPress={ () => {setAcceptGender(!acceptGender); setGender('')}}> 
                            <Image style={styles.icon} source = { acceptGender? require("./assets/images/minus.png") : require("./assets/images/plus.png") }/> 
                    </TouchableOpacity>
                    </View>
                        <View style={{ paddingBottom: '0%', flexDirection:'row'}}> 
                        <Pressable 
                            onPress={() => { acceptGender? (setGender('male')): {}}}
                            style={[styles.genderbutton, {width: '45%',backgroundColor: (gender=="male") ? colors.secondary : colors.fourth}]}>
                            <Text style={[styles.buttontext,{color: (acceptGender? (gender=="male") ? colors.fourth : colors.secondary :'grey' )}]}> Male </Text>
                        </Pressable>
                        <Pressable 
                            onPress={() => { acceptGender? (setGender('female')): {}}}
                            style={[styles.genderbutton, {width: '45%',backgroundColor: (gender=="female") ? colors.secondary : colors.fourth}]}>
                            <Text style={[styles.buttontext,{color: (acceptGender? (gender=="female") ? colors.fourth : colors.secondary :'grey' )}]}> Female </Text>
                        </Pressable>
                        </View>
                        <View style={{alignItems: 'center',alignContent:'center',justifyContent: 'flex-start',}}>
                            <Pressable 
                                onPress={() => { acceptGender? (setGender('none')): {}}}
                                style={[styles.nonegenderbutton, {width: 290,backgroundColor: (gender=="none") ? colors.secondary : colors.fourth}]}>
                                <Text style={[styles.buttontext,{color: (acceptGender? (gender=="none") ? colors.fourth : colors.secondary :'grey' )}]}> Non-Binary </Text>
                            </Pressable>
                        </View>
                    
                    </View> 
                </View>
        )
    }
    const OccupationSelecter = () => {
        return( 
            <View style={styles.occupationselecter}> 
            <Picker
                style = {styles.picker}
                enabled = {acceptOccupation? true:false }
                onValueChange={(itemValue, itemIndex) => {setOccupation(Number(itemIndex+1)); itemIndex = occupation-1 } 
                }>
                <Picker.Item label={occupationList[1]} value="1"/>
                {/* Change these values for backend */}
                <Picker.Item label={occupationList[2]} value="2"/>
                <Picker.Item label={occupationList[3]} value="3"/>
                <Picker.Item label={occupationList[4]} value="4"/>
                <Picker.Item label={occupationList[5]} value="5"/>
                <Picker.Item label={occupationList[6]} value="6"/>
                <Picker.Item label={occupationList[7]} value="7"/>
                <Picker.Item label={occupationList[8]} value="8"/>
                <Picker.Item label={occupationList[9]} value="9"/>
                <Picker.Item label={occupationList[10]} value="10"/>
                <Picker.Item label={occupationList[11]} value="11"/>
            </Picker>
            </View>
            );
    }
    const CountrySelector = () => {
        return(
            <View style={styles.countryselecter}>
                <Picker
                    style = {styles.picker}
                    enabled = {acceptCountry? true:false }
                    onValueChange={(itemValue, itemIndex) => {setCountry(Number(itemIndex)); itemIndex = country } 
                    }>
                {countryList.map((country) => {
                    return(
                        <Picker.Item key={countryList.indexOf(country)} label={country} value = {countryList.indexOf(country)}/>
                    );
                })}
                </Picker>
            </View>
        );
    }
    const OccupationAgeAndGender = () => {
        return(
            <View>
                    <View style={styles.category}>
                        <View style={{ paddingBottom: '3%', flexDirection:'row'}}> 
                        <Text style = {[styles.label,{color: acceptOccupation? 'black': 'grey'}]}> Occupation:   </Text>
                        <TouchableOpacity style={{display: selectOccupation? 'none':'flex'}} onPress={ () => {setAcceptOccupation(!acceptOccupation);setOccupation(0);setSelectOccupation(false) }}> 
                            <Image style={styles.icon} source = { acceptOccupation? require("./assets/images/minus.png") : require("./assets/images/plus.png") }/> 
                        </TouchableOpacity>
                        <TouchableOpacity style={{display: selectOccupation? 'flex':'none'}} onPress={ () => {setSelectOccupation(false); }}> 
                            <Image style={styles.icon} source = { require("./assets/images/tick.png")}/> 
                        </TouchableOpacity>
                        </View>
                        <TouchableOpacity  onPress={ () => setSelectOccupation(true)} disabled = { !acceptOccupation } style={styles.occupationButton}> 
                            <Text style={[styles.buttontext,{color: acceptOccupation? colors.secondary: 'grey'}]}>
                                { occupationList[occupation]}
                            </Text>
                        </TouchableOpacity>
                    </View> 
                    {  selectOccupation? <OccupationSelecter/> : <AgeAndGender /> }
                    </View>
        )
    }
    return ( 
        <View style={styles.background}>
            <SafeAreaView style = {styles.form}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Find Your Tribe
                    </Text>
                    <View style={styles.subheader}>
                        <Text style={styles.subtitle}>
                            Tell us a little bit about yourself. However, feel free to remove the things that don't matter to you.
                        </Text>
                    </View>
                </View>
                <View style ={styles.body}> 
                    <View style={styles.category}>
                        <View style={{ paddingBottom: '3%', flexDirection:'row', alignContent: 'center',alignItems:'center'}}> 
                        <Text style = {[styles.label,{color: acceptCountry? 'black': 'grey'}]}> Country:   </Text>
                        <TouchableOpacity style={{display: selectCountry? 'none':'flex'}} onPress={ () => {setAcceptCountry(!acceptCountry);setCountry(0);setSelectCountry(false) }}> 
                            <Image style={styles.icon} source = { acceptCountry? require("./assets/images/minus.png") : require("./assets/images/plus.png") }/> 
                        </TouchableOpacity>
                        <TouchableOpacity style={{display: selectCountry? 'flex':'none'}} onPress={ () => {setSelectCountry(false); }}> 
                            <Image style={styles.icon} source = { require("./assets/images/tick.png")}/> 
                        </TouchableOpacity>
                        </View>
                        <TouchableOpacity  onPress={ () => setSelectCountry(true)} disabled = { !acceptCountry } style={[styles.occupationButton]}> 
                            <Text style={[styles.buttontext,{color: acceptCountry? colors.secondary: 'grey'}]}>
                                { countryList[country]}
                            </Text>
                        </TouchableOpacity>
                    </View> 
                    { selectCountry? <CountrySelector/> : <OccupationAgeAndGender/> }
                </View>
            </SafeAreaView>
            <TouchableOpacity onPress={()=> handleNextPress()} style={styles.nextbutton}>
                        <Image style={{ marginLeft:'18%', marginTop:'15%', width: 40, height: 40, tintColor: colors.primary}} source={require("./assets/images/next.png")}/>
            </TouchableOpacity>
        </View>
     );
}
 
export default CustomCommunity;