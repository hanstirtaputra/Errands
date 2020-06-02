import React, { Component, useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import PostForm from './PostForm';

/**
 * TODO: 
 * 1) Create Post button
 * 2) Display all posts
 */
const MainScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (

        <View style={styles.centeredView}>
            <View>
                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        setModalVisible(true);
                    }}
                >
                    <Text style={styles.textStyle}>New Post</Text>
                </TouchableHighlight>

            </View>

            <View style={styles.modal}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalView}>
                            <PostForm />
                            <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "#C84444" }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.textStyle}>X</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "#4a668c" }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.textStyle}>Submit</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 22,
        marginBottom: 22,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#d8e3f2',

    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 22,
        marginBottom: 22,
        marginLeft: 10,
        marginRight: 10,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#4a668c",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignSelf: 'flex-start',
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});

export default MainScreen;