import React from 'react';
import {
    View
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const ShowModelScreen = () => {
    return (
        <View
            style={{
                width: wp('100%'),
                height: hp('100%')
            }}
        >
            
        </View>
    )
};

export default ShowModelScreen;