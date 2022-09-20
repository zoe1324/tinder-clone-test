import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Card from './src/components/card';
import users from './assets/data/users';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedGestureHandler,
} from "react-native-reanimated";
import {GestureHandlerRootView, PanGestureHandler} from "react-native-gesture-handler";

const App = () => {
    const translateX = useSharedValue(0);

    const cardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
        ],
    }));

    const gestureHandler = useAnimatedGestureHandler({
        onStart: _ => {
            console.warn('Touch start');
        },
        onActive: event => {
            translateX.value = event.translationX;
        },
        onEnd: () => {
            console.warn('Touch ended');
        },
    });

    return (<GestureHandlerRootView style={styles.container}>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.animatedCard, cardStyle]}>
                    <Card user={users[1]}/>
                </Animated.View>
            </PanGestureHandler>
    </GestureHandlerRootView>);
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    animatedCard: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;