import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, TextInput, TouchableHighlight, Modal, AsyncStorage } from 'react-native';
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

    const [tasks, setTasks] = useState([]);

    const [modal, setModalVisible] = useState(false);
    const [currentTask, setCurrentTask] = useState(false);

    let [fontsLoaded] = useFonts({
        Lato_400Regular,
    });

    useEffect(() => {
        (async () => {
            try {
                let currentTasks = await AsyncStorage.getItem('tasks');
                if (currentTasks == null) {
                    setTasks([]);
                } else {
                    setTasks(JSON.parse(currentTasks));
                }
            } catch (error) {
            }
        })();
    }, [])

    const saveTasks = async (tasks) => {
        try {
            await AsyncStorage.setItem('tasks'), JSON.stringify(tasks);
        } catch (error) {
        }
    }

    if (!fontsLoaded) {
        return null;
    }

    const addTask = () => {
        setModalVisible(!modal);

        let task = {
            id: uuid.v4(),
            task: currentTask
        }

        let newTasks = [...tasks, task];
        
        setTasks(newTasks);

        saveTasks(newTasks);
    }

    const deleteTask = (id) => {
        let newTasks = tasks.filter((item) => {
            return item.id != id;
        });

        setTasks(newTasks);

        saveTasks(newTasks);
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <StatusBar hidden />

            <Modal
                animationType='slide'
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput onChangeText={(text) => setCurrentTask(text)} autoFocus={true}></TextInput>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                            onPress={() => {
                                addTask()
                            }}
                        >
                            <Text style={styles.textStyle}>Add Task</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <ImageBackground source={image} style={styles.image}>
                <View style={styles.coverView}>
                    <Text style={styles.txtHeader}>Lista de Tarefas - Danki Code</Text>
                </View>
            </ImageBackground>

            {
                tasks.map((item) => {
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
            <TouchableOpacity
                style={styles.btnAddTask}
                onPress={() => setModalVisible(true)}
            >
                <Text
                    style={styles.txtAddTask}
                >
                    Add Task
                </Text>
            </TouchableOpacity>

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
    singleTask: {
        marginTop: 30,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        paddingBottom: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 5
    },
    openButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    },
    btnAddTask: {
        width: 200,
        padding: 8,
        backgroundColor: 'gray',
        marginTop: 20
    },
    txtAddTask: {
        textAlign: 'center',
        color: 'white'
    }
});
