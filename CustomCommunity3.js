import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './assets/colors';
import Slider from '@react-native-community/slider';
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
    backbutton: {
        height: 60,
        alignSelf: 'flex-start',
        width: 60,
        backgroundColor: colors.primary,
        marginBottom: '11%',
        borderRadius: 40,
        marginTop: '25%'
    },
    cards: {
        width: 310,
        backgroundColor: colors.primary,
        height: 370,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '35%'

    },
    cardForm: {
        marginTop: '13%'
    },
    cardElement: {
        
    },
    label: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.secondary,
        marginTop: 8
    },
    next: {
        height: 60,
        alignSelf: 'flex-end',
        marginRight: '-7%',
        width: 60,
        backgroundColor: colors.secondary,
        marginBottom: '11%',
        borderRadius: 40,
    }
})
const CustomComunity3 = ({route, navigation}) => {

    
    const {sports,music,entertainment} = route.params;
    const [sportsCard, setSportsCard] = useState(sports);
    const [musicCard, setMusicCard] = useState(music);
    const [entertainmentCard, setEntertainmentCard] = useState(entertainment);
    const [basketball, setBasketball] = useState(0);
    const [baseball, setBaseball] = useState(0);
    const [tennis, setTennis] = useState(0);
    const [soccer, setSoccer] = useState(0);
    const SportsSection = () => {
        return(
            <View style= {styles.cards}>
                <View style={styles.cardForm}> 
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Basketball:  </Text>
                        <Slider
                            
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={basketball}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setBasketball(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Baseball:  </Text>
                        <Slider
                            
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={baseball}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setBaseball(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Tennis:  </Text>
                        <Slider
                            
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={tennis}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setTennis(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Soccer:  </Text>
                        <Slider
                            
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={soccer}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setSoccer(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <TouchableOpacity onPress={()=> setSportsCard(false)} style={styles.next}>
                            <Image style={{ marginLeft:'21%', marginTop:'15%', width: 40, height: 40, tintColor: colors.primary}} source={require("./assets/images/next.png")}/>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
    const [pop, setPop] = useState(0);
    const [rap, setRap] = useState(0);
    const [jazz, setJazz] = useState(0);
    const [classical, setClassical] = useState(0);
    const MusicSection = () => {
        return(
            <View style= {styles.cards}>
                <View style={styles.cardForm}> 
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Pop Music:  </Text>
                        <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={pop}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setPop(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Hip-Hop/Rap Music:  </Text>
                        <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={rap}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setRap(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Jazz Music:  </Text>
                        <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={jazz}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setJazz(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Classical Music:  </Text>
                        <Slider
                            
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={classical}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setClassical(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <TouchableOpacity onPress={()=> setMusicCard(false)} style={styles.next}>
                            <Image style={{ marginLeft:'21%', marginTop:'15%', width: 40, height: 40, tintColor: colors.primary}} source={require("./assets/images/next.png")}/>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
    const [comedy, setComedy] = useState(0);
    const [action, setAction] = useState(0);
    const [drama, setDrama] = useState(0);
    const [horror, setHorror] = useState(0);
    const EntertainmentSection = () => {
        return(
            <View style= {styles.cards}>
                <View style={styles.cardForm}> 
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Comedy Genre:  </Text>
                        <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={comedy}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setComedy(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Action Movies:  </Text>
                        <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={action}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setAction(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Drama:  </Text>
                        <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={drama}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setDrama(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <View style={styles.cardElement}> 
                        <Text style= {styles.label}> Horror:  </Text>
                        <Slider
                            
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            value={horror}
                            maximumValue={1}
                            tapToSeek={true}
                            onSlidingComplete = { (value) => { setHorror(value) }}
                            minimumTrackTintColor={colors.secondary}
                            maximumTrackTintColor={colors.sixth} />
                    </View>
                    <TouchableOpacity onPress={()=> setEntertainmentCard(false)} style={styles.next}>
                            <Image style={{ marginLeft:'21%', marginTop:'15%', width: 40, height: 40, tintColor: colors.primary}} source={require("./assets/images/next.png")}/>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
    const [tech, setTech] = useState(0);
    const [politics, setPolitics] = useState(0);
    const [fasion, setFasion] = useState(0);
    const [issues, setIssues] = useState(0);
    //here's all the clustering data for the backend and ML :)) 
    const submitData = () => {
        
        navigation.navigate("Suggestions");
    }
    const OtherSection = () => {
            return(
                <View style= {styles.cards}>
                    <View style={styles.cardForm}> 
                        <View style={styles.cardElement}> 
                            <Text style= {styles.label}> Science and Technology:  </Text>
                            <Slider
                                style={{width: 200, height: 40}}
                                minimumValue={0}
                                value={tech}
                                maximumValue={1}
                                tapToSeek={true}
                                onSlidingComplete = { (value) => { setTech(value) }}
                                minimumTrackTintColor={colors.secondary}
                                maximumTrackTintColor={colors.sixth} />
                        </View>
                        <View style={styles.cardElement}> 
                            <Text style= {styles.label}> Governemnt and Politics:  </Text>
                            <Slider
                                style={{width: 200, height: 40}}
                                minimumValue={0}
                                value={politics}
                                maximumValue={1}
                                tapToSeek={true}
                                onSlidingComplete = { (value) => { setPolitics(value) }}
                                minimumTrackTintColor={colors.secondary}
                                maximumTrackTintColor={colors.sixth} />
                        </View>
                        <View style={styles.cardElement}> 
                            <Text style= {styles.label}> Design and Fashion:  </Text>
                            <Slider
                                style={{width: 200, height: 40}}
                                minimumValue={0}
                                value={fasion}
                                maximumValue={1}
                                tapToSeek={true}
                                onSlidingComplete = { (value) => { setFasion(value) }}
                                minimumTrackTintColor={colors.secondary}
                                maximumTrackTintColor={colors.sixth} />
                        </View>
                        <View style={styles.cardElement}> 
                            <Text style= {styles.label}> Global and Social Issues </Text>
                            <Slider
                                
                                style={{width: 200, height: 40}}
                                minimumValue={0}
                                value={issues}
                                maximumValue={1}
                                tapToSeek={true}
                                onSlidingComplete = { (value) => { setIssues(value) }}
                                minimumTrackTintColor={colors.secondary}
                                maximumTrackTintColor={colors.sixth} />
                        </View>
                        <TouchableOpacity onPress={()=> submitData()} style={styles.next}>
                                <Image style={{ marginLeft:'17%', marginTop:'15%', width: 40, height: 40, tintColor: colors.primary}} source={require("./assets/images/tick.png")}/>
                    </TouchableOpacity>
                    </View>
                </View>
            )
        }
    return ( 
        <View style={styles.background}>
            <TouchableOpacity onPress={()=> navigation.navigate("Custom2")} style={styles.backbutton}>
                        <Image style={{ marginLeft:'10%', marginTop:'15%', width: 40, height: 40, tintColor: colors.secondary}} source={require("./assets/images/back.png")}/>
            </TouchableOpacity>
            <View style={styles.form}>
                <View style={styles.header}> 
                    <Text style={styles.title}>
                        Rate Your Interests
                    </Text>
                    <Text style={styles.subtitle}>
                    { (!sports&&!music&&!entertainment)? "So, you like none of those things, how about the following categories? How would you rate them from 1-100?" : "" } 
                    </Text>
                    <Text style={[{display: (sports||music||entertainment)? 'flex':'none', },styles.subtitle]}>
                    Okay, so you like {sports? "sports" :""}{( sports && (music && entertainment))? ", " : ( (sports && music && !entertainment) || (sports && !music && entertainment) )? " and " : "" }{music? "music":""}{(music && entertainment) ? " and " : ""}{entertainment?"entertainment":""}. Then try rating the following from 1-100.
                    </Text>
                </View>
                <View style={styles.body}> 
                { sportsCard? <SportsSection/> : ( (musicCard? <MusicSection /> : (entertainmentCard? <EntertainmentSection/> : <OtherSection/>)))}
                </View>
            </View>
        </View>
     );
}


 
export default CustomComunity3;