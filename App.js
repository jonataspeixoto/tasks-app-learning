import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
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
import uuid from 'react-native-uuid';

export default function App() {

    const image = require('./resources/bg.jpg')

    const [tasks, setTasks] = useState([
        {
            id: uuid.v4(),
            task: "My task 1."
        },
        {
            id: uuid.v4(),
            task: "My task 2."
        },
        {
            id: uuid.v4(),
            task: "My task 3."
        }
    ]);

    let [fontsLoaded] = useFonts({
        Lato_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    const deleteTask = (id) => {
        alert('Task was deleted with success');

        let newTasks = tasks.filter((item) => {
            return item.id != id;
        });
        
        setTasks(newTasks);
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <StatusBar hidden />
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.coverView}>
                    <Text style={styles.txtHeader}>Lista de Tarefas - Danki Code</Text>
                </View>
            </ImageBackground>

            {
                tasks.map(( item ) => {
                    return (
                        <View key={item.id} style={styles.singleTask}>
                            <View style={{ flex: 1, width: '100%', padding: 10 }}>
                                <Text>{item.task}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', flex: 1, padding: 10 }}>
                                <TouchableOpacity onPress={() => deleteTask(item.id)}>
                                    <AntDesign name="minuscircleo" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView >
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
    singleTask: {
        marginTop: 30,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        paddingBottom: 10
    }
});
