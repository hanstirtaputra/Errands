import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

/**
 * TODO:
 * 1) Input field for email and password
 * 2) Continue button to proceed to main screen (navigate)
 */
export default function LoginScreen(props: any) {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.text}>Please Login</Text>
            <View style={styles.formContainer}>
                <TextInput placeholder="👤Username" style={styles.input}></TextInput>

                <TextInput
                    secureTextEntry={true}
                    placeholder="🔐Password"
                    style={styles.input}
                ></TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.actionContainer}
                    onPress={() => props.navigation.navigate("MainScreen")}
                >
                    <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionContainer}
                    onPress={() => props.navigation.navigate("RegistrationScreen")}
                >
                    <Text style={styles.buttonText}> Sign up </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4a688c",
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        marginBottom: 20,
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFF",
    },

    formContainer: {
        padding: 20,
    },

    input: {
        height: 40,
        backgroundColor: "#FFF",
        marginBottom: 20,
        paddingHorizontal: 20,
        width: 250,
        borderRadius: 10,
    },

    buttonContainer: {
        flexDirection: "row",
        borderRadius: 10,
    },

    actionContainer: {
        paddingHorizontal: 15,
        borderRadius: 10,
    },

    buttonText: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        fontWeight: "bold",
    },
});
