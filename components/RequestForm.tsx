import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
  TouchableHighlight,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

/**
 * 1) How many items you can carry, number.
 * 2) Where you are going
 * 3) What time you will be coming back
 */
const RequestForm = (props) => {
  const [itemsYouNeed, UpdateItemsYouNeed] = useState("   ");
  const [whenYouNeed, UpdateWhenYouNeed] = useState("   ");
  const [whereYouLive, UpdateWhereYouLive] = useState("   ");

  return (
    <View>
      <Text style={styles.text}>What items do you need?</Text>
      <View style={styles.textInput}>
        <TextInput onChangeText={(value) => UpdateItemsYouNeed(value)} />
      </View>

      <Text style={styles.text}>When do you need it?</Text>
      <View style={styles.textInput}>
        <TextInput onChangeText={(value) => UpdateWhenYouNeed(value)} />
      </View>

      <Text style={styles.text}>Where do you live?</Text>
      <View style={styles.textInput}>
        <TextInput onChangeText={(value) => UpdateWhereYouLive(value)} />
      </View>

      <View style={{ flexDirection: "row", alignContent: "space-between" }}>
        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: "#C84444" }}
          onPress={() => {
            props.closeModal();
          }}
        >
          <Text style={styles.textStyle}>X</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: "#4a668c" }}
          onPress={() =>
            props.updateRequest(itemsYouNeed, whenYouNeed, whereYouLive)
          }
        >
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableHighlight>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    margin: 10,
    alignItems: "center",
    borderColor: "black",
    borderBottomWidth: 0.5,
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#4a668c",
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
});

export default RequestForm;