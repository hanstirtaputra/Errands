import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Picker } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

/**
 * 1) How many items you can carry, number.
 * 2) Where you are going
 * 3) What time you will be coming back
 */
const PostForm = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [time, setTime] = useState('                   ');
    const [selectedValue, setSelectedValue] = useState("java");

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
                <TextInput
                />
            </View>

            <Text style={styles.text}>Where are you going?</Text>
            <View style={styles.textInput}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 40, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Ghim Moh Market" value="Ghim Moh Market" />
                    <Picker.Item label="Star Vista" value="Star Vista" />
                    <Picker.Item label="Dover Food Court" value="Dover Food Court" />
                </Picker>
            </View>

            <Text style={styles.text}>Time of arrival</Text>
            <View style={styles.textInput}>
                <TouchableOpacity onPress={() => showDatePicker()}>
                    <Text>{time.toString().substr(15, 6).length !== 4
                        ? time.toString().substr(15, 6) + " hrs"
                        : "                 "}</Text>
                </TouchableOpacity>
            </View>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        margin: 10,
        alignItems: 'center',
        borderColor: 'black',
        borderBottomWidth: 0.5,
        borderRadius: 8

    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#4a668c"
    }
})

export default PostForm;