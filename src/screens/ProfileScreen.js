import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, Pressable, TextInput} from 'react-native'
import {GestureHandlerRootView} from "react-native-gesture-handler";
import AnimatedStack from "../components/animatedStack";
import users from "../../assets/data/users";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Auth, DataStore} from 'aws-amplify';
import {Picker} from '@react-native-picker/picker'
import {User} from '../models/';

const ProfileScreen = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('')
    const [lookingFor, setLookingFor] = useState('')

    const isValid = () => {
        return name && bio && gender && lookingFor;
    }

    const save = async ()  => {
        if (!isValid()) {
            console.warn('Not valid')
            return;
        }

        const user = await Auth.currentAuthenticatedUser();
        return;
        // const newUser = new User({
        //     name,
        //     bio,
        //     gender,
        //     lookingFor,
        //     image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        // });
        // DataStore.save(newUser)
    };



    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder="Name..."
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Bio..."
                    multiline
                    numberOfLines={3}
                    value={bio}
                    onChangeText={setBio}
                />
                <Text>Gender</Text>
                <Picker
                    selectedValue={gender}
                    onValueChange={itemValue =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Male" value="MALE" />
                    <Picker.Item label="Female" value="FEMALE" />
                    <Picker.Item label="Other" value="OTHER" />
                </Picker>
                <Text>Looking for</Text>
                <Picker
                    selectedValue={lookingFor}
                    onValueChange={itemValue =>
                        setLookingFor(itemValue)
                    }>
                    <Picker.Item label="Male" value="MALE" />
                    <Picker.Item label="Female" value="FEMALE" />
                    <Picker.Item label="Other" value="OTHER" />
                </Picker>

                <Pressable onPress={save} style={styles.button}>
                    <Text>Save</Text>
                </Pressable>

                <Pressable onPress={() => Auth.signOut()} style={styles.button}>
                    <Text>Sign out</Text>
                </Pressable>

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
    button: {
        backgroundColor: '#F63A6E',
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
    },
    input: {
        margin: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
});

export default ProfileScreen;