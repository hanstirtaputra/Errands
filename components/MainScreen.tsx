import React, { Component, useState, useContext } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from "react-native";
import PostForm from "./PostForm";
import ActivityFeed from "./ActivityFeed";

/**
 * TODO:
 * 2) Display all posts
 */
const MainScreen = (props: any) => {
  var idCount = 0;
  const data = [
    {
      id: idCount,
      itemsCanCarry: "10",
      returnTime: new Date().toString(),
      destination: "Bukit Merah NTUC",
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  // State affecting all the posts visible in main screen, passed as props to ActivityFeed
  const [allPosts, addToPost] = useState(data);
  const [elder, setElder] = useState(false);
  const [language, setLanguage] = useState("ENGLISH");

  const navigate = () =>
    props.navigation.navigate("ChatScreen", { selectedLanguage: language });

  const closeModal = () => {
    setModalVisible(false);
  };

  const updatePosts = (time, noItems, selectedDestination) => {
    idCount++;
    setModalVisible(!modalVisible);
    addToPost([
      ...allPosts,
      {
        id: idCount,
        itemsCanCarry: noItems,
        returnTime: time,
        destination: selectedDestination,
      },
    ]);
    console.log(allPosts);
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
          <Text style={styles.textStyle}>New Post</Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.elderlyMode}
          onPress={() => setElder(!elder)}
        >
          <Text style={styles.textStyle}>Elderly Mode</Text>
        </TouchableOpacity>
      </View>

      <ActivityFeed
        data={allPosts}
        elderly={elder}
        navigate={navigate}
        selectedLanguage={language}
      />

      <View style={styles.modal}></View>
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
            <PostForm closeModal={closeModal} updatePosts={updatePosts} />
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
  },
});

export default MainScreen;
