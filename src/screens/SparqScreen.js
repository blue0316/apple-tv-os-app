import React, { useEffect } from "react";
import { Animated, Button, Image, ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { SparqContainer } from '../components';

import { bg_1, sparqlogo_dark } from '../common';
import { Colors } from "react-native/Libraries/NewAppScreen";

const animatedValue = new Animated.Value(0);

const SparqScreen = (props) => {
    const { navigation } = props;
    // const navigateToMain = () => {
    //     let navTo = setTimeout(() => {
    //         props.navigation.navigate('MainScreen');
    //     }, 300)

    //     return () => clearTimeout(navigateToMain);
    // }

    useEffect(() => {
        let navTop = setTimeout(() => {
            navigation.navigate("MainScreen");
        }, 1000);

        return () => {
            clearTimeout(navTop);
        };
    }, []);

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.white,
                flex: 1
            }}>
            <Image
                source={sparqlogo_dark}
            />
        </View>
    )
};

export default SparqScreen;