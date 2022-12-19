import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import { SparqContainer, SparqHeader } from '../components';
import {
    model_1_1024,
    model_2_1024,
    model_3_1024,
    model_4_1024,
    model_5_1024,
    model_1_4096,
    model_2_4096,
    model_3_4096,
    model_4_4096,
    model_5_4096,
    sparqlogo,
} from '../common';

const ModelData = [
    {
        id: 1,
        name: 'Jason Mitchell Jr.',
        model: 'Winter 2022',
        model_id: 1,
        model_image_1024: model_1_1024,
        model_image_4096: model_1_4096,
    },
    {
        id: 2,
        name: 'Jason Mitchell Jr.',
        model: 'Winter 2022',
        model_id: 2,
        model_image_1024: model_2_1024,
        model_image_4096: model_2_4096,
    },
    {
        id: 3,
        name: 'Jason Mitchell Jr.',
        model: 'Winter 2022',
        model_id: 4,
        model_image_1024: model_3_1024,
        model_image_4096: model_3_4096,
    },
    {
        id: 4,
        name: 'Jason Mitchell Jr.',
        model: 'Winter 2022',
        model_id: 7,
        model_image_1024: model_4_1024,
        model_image_4096: model_4_4096,
    },
    {
        id: 5,
        name: 'Jason Mitchell Jr.',
        model: 'Winter 2022',
        model_id: 11,
        model_image_1024: model_5_1024,
        model_image_4096: model_5_4096,
    },
];

const MainScreen = props => {
    const { navigation } = props;

    const [selectedModelIndex, setSelectedModelIndex] = useState(0);
    const [screenState, setScreenState] = useState(false);

    const isCloseToBottom = ({
        layoutMeasurement,
        contentOffset,
        contentSize,
    }) => {
        const paddingToBottom = 20;
        return (
            layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom
        );
    };

    return (
        <SparqContainer>
            <View
                style={{
                    marginHorizontal: wp('6%'),
                    overflow: 'visible'
                }}
            >
                <SparqHeader>
                    <Image
                        source={sparqlogo}
                        style={{
                            width: 83.5,
                            height: 50,
                        }}
                    />
                </SparqHeader>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        // flex: 1,
                        // height: '100%',
                        marginHorizontal: -20,
                        overflow: 'visible'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            height: '100%',
                            paddingHorizontal: 20,
                            overflow: 'visible',
                            borderRightColor: '#fff',
                            borderRightWidth: 4
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: 15
                            }}
                        >
                            <View
                                style={{
                                    width: 80
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        color: '#fff'
                                    }}
                                >Roster</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'semibold'
                                    }}
                                >
                                    {
                                        ModelData[selectedModelIndex].name + " - " + ModelData[selectedModelIndex].model
                                    }
                                    {
                                        ` (#${ModelData[selectedModelIndex].model_id})`
                                    }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            {ModelData.map(item => (
                                <Pressable
                                    key={`model-image-${item.id}`}
                                    style={styles.modelListItem}
                                    onFocus={() => {
                                        setSelectedModelIndex(item.id - 1);
                                    }}>
                                    <View
                                        style={{
                                            padding: 5,
                                            borderWidth: 3,
                                            borderColor:
                                                item.id === selectedModelIndex + 1
                                                    ? 'white'
                                                    : 'transparent',
                                            borderStyle: 'solid',
                                            borderRadius: 20,
                                        }}>
                                        <Image
                                            source={item.model_image_1024}
                                            style={{
                                                width: '100%',
                                                height: 0,
                                                paddingTop: '100%',
                                                borderRadius: 15,
                                            }}
                                        />
                                    </View>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 20,
                        }}>
                        <View>
                            <Image
                                source={ModelData[selectedModelIndex].model_image_4096}
                                style={{
                                    width: '100%',
                                    height: 0,
                                    paddingTop: '90%',
                                    borderRadius: 10,
                                }}
                            />
                        </View>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <Pressable
                                onFocus={() => {
                                    setScreenState(true);
                                }}
                                onBlur={() => {
                                    setScreenState(false);
                                }}
                                onPress={() => {
                                    navigation.navigate('ShowModelScreen')
                                }}
                            >
                                <LinearGradient
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    colors={['#fd644f', '#f18d27']}
                                    style={{
                                        width: 100,
                                        marginTop: 15,
                                        borderRadius: 5,
                                        opacity: screenState ? 0.6 : 1
                                    }}
                                >
                                    <Text
                                        style={{
                                            lineHeight: 35,
                                            fontSize: 16,
                                            color: 'white',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            paddingHorizontal: 5
                                        }}
                                    >
                                        Full Screen
                                    </Text>
                                </LinearGradient>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </SparqContainer>
    );
};

const styles = {
    row: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        marginHorizontal: -5,
    },
    modelListItem: {
        width: '33.33%',
        paddingHorizontal: 5,
        paddingBottom: 15,
    },
};

export default MainScreen;
