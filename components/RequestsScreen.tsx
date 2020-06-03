import React, { Component, useState, useContext } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Picker,
    TouchableOpacity,
} from "react-native";
import RequestForm from "./RequestForm";
import RequestsFeed from "./RequestsFeed";

/**
 * Display all requests 
 */
const RequestsScreen = (props: any) => {
    const [idCount, incCount] = useState(0);

    const data = [
        {
            id: idCount,
            itemsNeed: "Eggs, Rice, Toilet Paper",
            whenNeed: 'By 7pm',
            whereLive: "Block 132 #12-11",
        },
    ];

    const [modalVisible, setModalVisible] = useState(false);
    // State affecting all the Requests visible in main screen, passed as props to ActivityFeed
    const [allRequests, addToRequest] = useState(data);
    const [elder, setElder] = useState(false);
    const [language, setLanguage] = useState("ENGLISH");
    const [selectedValue, setSelectedValue] = useState("Requests");

    const navigate = () =>
        props.navigation.navigate("ChatScreen", { selectedLanguage: language });

    const closeModal = () => {
        setModalVisible(false);
    };

    const updateRequest = (itemsYouNeed, whenYouNeed, whereYouLive) => {
        incCount(idCount + 1);
        setModalVisible(!modalVisible);
        addToRequest([
            ...allRequests,
            {
                id: idCount,
                itemsNeed: itemsYouNeed,
                whenNeed: whenYouNeed,
                whereLive: whereYouLive,
            },
        ]);
    };

    const deleteRequest = (id) => {
        addToRequest(allRequests.filter((Request) => Request.id !== id));
    };

    const setLanguageToChinese = () => {
        setLanguage("CHINESE");
    };

    const setLanguageToTamil = () => {
        setLanguage("TAMIL");
    };

    const setLanguageToMalay = () => {
        setLanguage("MALAY");
    };

    const setLanguageToEnglish = () => {
        setLanguage("ENGLISH");
    };

    return (
        <View style={styles.centeredView}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        setModalVisible(true);
                    }}
                >
                    <Text style={styles.textStyle}>New Request</Text>
                </TouchableHighlight>
                <TouchableOpacity
                    style={styles.elderlyMode}
                    onPress={() => setElder(!elder)}
                >
                    <Text style={styles.textStyle}>Elderly Mode👵🏻</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: '80%' }}>
                <RequestsFeed
                    data={allRequests}
                    elderly={elder}
                    navigate={navigate}
                    selectedLanguage={language}
                    deleteRequest={deleteRequest}
                />
            </View>

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
                        <RequestForm closeModal={closeModal} updateRequest={updateRequest} />
                    </View>
                </View>
            </Modal>

            <View style={styles.footerButtons}>
                <TouchableOpacity
                    style={styles.languageButton}
                    onPress={() => setLanguageToTamil()}
                >
                    <Text>ழ்</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.languageButton}
                    onPress={() => setLanguageToMalay()}
                >
                    <Text>Melayu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.languageButton}
                    onPress={() => setLanguageToChinese()}
                >
                    <Text>中文</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.languageButton}
                    onPress={() => setLanguageToEnglish()}
                >
                    <Text>English</Text>
                </TouchableOpacity>

                <View style={styles.picker}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => itemValue === 'Posts' ? props.navigation.navigate('MainScreen') : setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Posts" value="Posts" />
                        <Picker.Item label="Requests" value="Requests" />
                    </Picker>
                </View>

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
        backgroundColor: "#d8e3f2",
    },
    modal: {
        justifyContent: "center",
        alignItems: "center",
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
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: "#4a668c",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignSelf: "flex-start",
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    languageButton: {
        padding: 20,
        alignSelf: "flex-end",
        marginTop: -5,
        backgroundColor: "#f2f2f2",
        borderRadius: 20,
    },
    elderlyMode: {
        backgroundColor: "#4a668c",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignSelf: "flex-start",
    },
    footerButtons: {
        flexDirection: "row",
        marginTop: 35
    },
    picker: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        borderWidth: 1,
        width: '20%',
        borderRadius: 20,
        marginLeft: 20


    }
});

export default RequestsScreen;
