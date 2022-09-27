import 'react-native-gesture-handler';
import React from 'react'
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import HomeScreen from "./src/screens/HomeScreen";
import MatchesScreen from "./src/screens/MatchesScreen";

const App = () => {
    return (
        <GestureHandlerRootView style={styles.container}>
            <MatchesScreen/>
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