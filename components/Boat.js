import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';

const Boat = ({icon_name,name,description,picture}) => {
    return (
        <View>
            <Text></Text>


            <Text>
                <FontAwesome6 name={icon_name}
                    size={40}
                />
                {" "}{name}
            </Text>

            <Text>
                {description}
            </Text>

        <Image
            source={picture}
            style={{width: 400, height: 400}}/>
        </View>

    );
}
    export default Boat;