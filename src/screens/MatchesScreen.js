import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {GestureHandlerRootView} from "react-native-gesture-handler";
import AnimatedStack from "../components/animatedStack";
import users from "../../assets/data/users";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";


const MatchesScreen = () => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    color: '#F63A6E',
                }}>
                    New Matches
                </Text>
                <View style={styles.users}>
                    {users.map(user => (
                        <View style={styles.user} key={user.id}>
                            <Image source={{uri: user.image}} style={styles.image} />
                        </View>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flex: 1,
        paddingTop: 30,
    },
    container: {
        padding: 10,
    },
    users: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    user: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 50,

        borderWidth: 2,
        padding: 3,
        borderColor: '#F63A6E'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
});

export default MatchesScreen;