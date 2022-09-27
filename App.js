import 'react-native-gesture-handler';
import React from 'react'
import {StyleSheet} from 'react-native';
import Card from './src/components/card';
import users from './assets/data/users';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import AnimatedStack from "./src/components/animatedStack";

const App = () => {

    const onSwipeLeft = (user) => {
        console.warn("swipe left", user.name)
    };

    const onSwipeRight = (user) => {
        console.warn("swipe right", user.name)
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <AnimatedStack
                data={users}
                renderItem={({item}) => <Card user={item} />}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
            />
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default App;