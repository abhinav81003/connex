import { useState } from "react";
import React from "react";
import Slider from '@react-native-community/slider';

const CustomSlider = (props) => {

const[acceptValue, setAcceptValue] = useState(props.type)

    return ( 
        <Slider
            onValueChange ={ age => setAge(age)}
            style={{width: 200, height: 40}}
            disabled = {acceptValue? false: true}
            minimumValue={12}
            maximumValue={100}
            minimumTrackTintColor={colors.secondary}
            maximumTrackTintColor="#000000" />
     );
}
 
export default CustomSlider;