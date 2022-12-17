import React from 'react';
import {
    View
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Viewer from '../components/ModelViewer/Viewer';

const ShowModelScreen = () => {
    return (
        <View
            style={{
                width: wp('100%'),
                height: hp('100%')
            }}
        >
            <Viewer />
        </View>
    )
};

export default ShowModelScreen;