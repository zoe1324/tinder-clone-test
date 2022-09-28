import 'react-native-gesture-handler';
import React, {useState} from 'react'
import {Platform, StyleSheet, Pressable, View} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import HomeScreen from "./src/screens/HomeScreen";
import MatchesScreen from "./src/screens/MatchesScreen";
import Fontisto from "react-native-vector-icons/Fontisto";
import {SafeAreaView} from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const App = () => {
    const [activeScreen, setActiveScreen] = useState('HOME');

    const color = "#b5b5b5";
    const activeColor = "#F76C6B"


    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <View style={styles.topNavigation}>
                    <Pressable onPress={() => setActiveScreen('HOME')}>
                        <Fontisto
                            name="tinder"
                            size={30}
                            color={activeScreen === 'HOME' ? activeColor: color}
                        />
                    </Pressable>
                    <Pressable>
                        <MaterialCommunityIcons
                            name="star-four-points"
                            size={30}
                            color={color}
                        />
                    </Pressable>
                    <Pressable onPress={() => setActiveScreen('CHAT')}>
                        <Ionicons
                            name="ios-chatbubbles"
                            size={30}
                            color={activeScreen === 'CHAT' ? activeColor: color}
                        />
                    </Pressable>
                    <Pressable>
                        <FontAwesome
                            name="user"
                            size={30}
                            color={color}
                        />
                    </Pressable>
                </View>
                {activeScreen === 'HOME' && <HomeScreen/>}
                {activeScreen === 'CHAT' && <MatchesScreen/>}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    topNavigation : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingBottom: 10,
    },
});

export default App;