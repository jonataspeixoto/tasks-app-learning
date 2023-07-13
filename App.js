import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import {
    useFonts,
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
} from '@expo-google-fonts/lato';

SplashScreen.preventAutoHideAsync();

export default function App() {

    const image = require('./resources/bg.jpg')

    let [fontsLoaded] = useFonts({
        Lato_400Regular,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <StatusBar hidden />
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.coverView}>
                    <Text style={styles.txtHeader}>Lista de Tarefas - Danki Code</Text>
                </View>
            </ImageBackground>
            <View style={styles.singleTask}>
                <View style={{flex: 1, width: '100%', padding: 10}}>
                    <Text>My number 1 task from XX day of XX month</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1, padding: 10}}>
                    <TouchableOpacity>
                        <AntDesign name="minuscircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.singleTask}>
                <View style={{flex: 1, width: '100%', padding: 10}}>
                    <Text>My number 1 task from XX day of XX month</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1, padding: 10}}>
                    <TouchableOpacity>
                        <AntDesign name="minuscircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.singleTask}>
                <View style={{flex: 1, width: '100%', padding: 10}}>
                    <Text>My number 1 task from XX day of XX month</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1, padding: 10}}>
                    <TouchableOpacity>
                        <AntDesign name="minuscircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.singleTask}>
                <View style={{flex: 1, width: '100%', padding: 10}}>
                    <Text>My number 1 task from XX day of XX month</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1, padding: 10}}>
                    <TouchableOpacity>
                        <AntDesign name="minuscircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.singleTask}>
                <View style={{flex: 1, width: '100%', padding: 10}}>
                    <Text>My number 1 task from XX day of XX month</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1, padding: 10}}>
                    <TouchableOpacity>
                        <AntDesign name="minuscircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.singleTask}>
                <View style={{flex: 1, width: '100%', padding: 10}}>
                    <Text>My number 1 task from XX day of XX month</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1, padding: 10}}>
                    <TouchableOpacity>
                        <AntDesign name="minuscircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.singleTask}>
                <View style={{flex: 1, width: '100%', padding: 10}}>
                    <Text>My number 1 task from XX day of XX month</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1, padding: 10}}>
                    <TouchableOpacity>
                        <AntDesign name="minuscircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.singleTask}>
                <View style={{flex: 1, width: '100%', padding: 10}}>
                    <Text>My number 1 task from XX day of XX month</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1, padding: 10}}>
                    <TouchableOpacity>
                        <AntDesign name="minuscircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 80,
        resizeMode: 'cover'
    },
    coverView: {
        width: '100%',
        height: 80,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    txtHeader: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginTop: 30,
        fontFamily: 'Lato_400Regular'
    },
    singleTask:{
        marginTop: 30,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        paddingBottom: 10
    }
});
