import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

/**
 * TODO: 
 * 1) Input field for email and password
 * 2) Continue button to proceed to main screen (navigate)
 */
export default function LoginScreen(props: any) {
    return (
        <View style={styles.container}>
            <Text>Login </Text>
            <Button title="Next Page" onPress={() => props.navigation.navigate("MainScreen")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }

})