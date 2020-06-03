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
const PostForm = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState("                   ");
  const [selectedDestination, setSelectedDestination] = useState(
    "Ghim Moh Market"
  );
  const [itemsCanCarry, UpdateItemsCanCarry] = useState("   ");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    hideDatePicker();
    setTime(date);
  };

  return (
    <View>
      <Text style={styles.text}>How many items can u carry</Text>
      <View style={styles.textInput}>
        <TextInput onChangeText={(value) => UpdateItemsCanCarry(value)} />
      </View>

      <Text style={styles.text}>Where are you going?</Text>
      <View style={styles.textInput}>
        <Picker
          selectedValue={selectedDestination}
          style={{ height: 40, width: 150 }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedDestination(itemValue)
          }
        >
          <Picker.Item label="Ghim Moh Market" value="Ghim Moh Market" />
          <Picker.Item label="Star Vista" value="Star Vista" />
          <Picker.Item label="Dover Food Court" value="Dover Food Court" />
        </Picker>
      </View>

      <Text style={styles.text}>Return time</Text>
      <View style={styles.textInput}>
        <TouchableOpacity onPress={() => showDatePicker()}>
          <Text>
            {time.toString().substr(15, 6).length !== 4
              ? time.toString().substr(15, 6) + " hrs"
              : "                 "}
          </Text>
        </TouchableOpacity>
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
            props.updatePosts(time, itemsCanCarry, selectedDestination)
          }
        >
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableHighlight>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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

export default PostForm;
