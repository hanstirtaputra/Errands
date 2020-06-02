import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

/**
 * 1) Settle all the required fields
 * 2) Accept request button to navigate to ChatScreen
 * 3) Sends notification 
 */
const Post = (props: any) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text>
                    Items can carry: {props.children.itemsCanCarry.toString()} Destination: {props.children.destination.toString()}
                </Text>
                <View>
                    <Text>Returning by {props.children.returnTime.toString()}</Text>
                </View>
            </View>
        </View>

    )
}

export default Post;

const styles = StyleSheet.create({
    card: {
        borderRadius: 14,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
})
