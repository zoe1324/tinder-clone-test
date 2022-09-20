import React from 'react';
import {Text, Image, ImageBackground, StyleSheet, View} from 'react-native';

const Card = props => {
    const {name, image, bio} = props.user;
    return (
    <View style={styles.card}>
        <ImageBackground
            source={{
                uri: image
            }}
            style={styles.image}>
            <View style={styles.cardInner}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.bio}>{bio}</Text>
            </View>
        </ImageBackground>
    </View>
    );
};

const styles = StyleSheet.create({
    card:{
        width: '95%',
        height: '65%',
        borderRadius: 11,
        overflow: 'hidden',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    cardInner: {
        padding: 20,
    },
    image: {

        //shadow not working well with opacity
        //apple shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        //android shadow
        elevation: 11,

        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        overflow: "hidden",
    },
    name:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    bio:{
        fontSize: 18,
        color: 'white',
        lineHeight: 25,
    },
});
export default Card;