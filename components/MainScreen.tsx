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
import PostForm from "./PostForm";
import ActivityFeed from "./ActivityFeed";

/**
 * TODO:
 * 2) Display all posts
 */
const MainScreen = (props: any) => {
  const [idCount, incCount] = useState(0);

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
  const [selectedValue, setSelectedValue] = useState("Posts");

  const navigate = () =>
    props.navigation.navigate("ChatScreen", { screenType: 'activity' });

  const closeModal = () => {
    setModalVisible(false);
  };

  const updatePosts = (time, noItems, selectedDestination) => {
    incCount(idCount + 1);
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
  };

  const deletePost = (id) => {
    addToPost(allPosts.filter((post) => post.id !== id));
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
          <Text style={styles.textStyle}>Elderly Mode👵🏻</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: '80%' }}>
        <ActivityFeed
          data={allPosts}
          elderly={elder}
          navigate={navigate}
          selectedLanguage={language}
          deletePost={deletePost}
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

        <View style={styles.picker}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => itemValue === 'Requests' ? props.navigation.navigate('RequestsScreen') : setSelectedValue(itemValue)}
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

export default MainScreen;
