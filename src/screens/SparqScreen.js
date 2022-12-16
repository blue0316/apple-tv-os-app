import React from "react";
import { Image, View } from "react-native";

import { useFocusEffect } from '@react-navigation/native';

import { sparqlogo_dark } from '../common';
import { Colors } from "react-native/Libraries/NewAppScreen";

const SparqScreen = (props) => {
    const { navigation } = props;

    useFocusEffect(() => {
        let navTop = setTimeout(() => {
            navigation.navigate("MainScreen");
            return () => {
                clearTimeout(navTop);
            };
        }, 1000);
    });

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