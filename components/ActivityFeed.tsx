import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const data = [
    {
        name: 'Kwang Joo',
        destination: 'Korea Army',
        return_time: 'Year 2022'
    },
    {
        name: 'Hans',
        destination: 'Bukit Merah NTUC',
        return_time: '22:00 hrs'
    },
]

const Post = ({ data }: any) => {
    return (
        <View style={styles.item}>
            <Text>
                {data.name} is going to {data.destination}
            </Text>
            <View>
                <Text>Returning by {data.return_time}</Text>
            </View>
        </View>
    )
}

const ActivityFeed = () => {
    return (
        <SafeAreaView>
            <FlatList style={styles.list}
                data={data}
                renderItem={({ item }) => <Post data={item} />}
                keyExtractor={item => item.name}
            />

        </SafeAreaView >
    )
}

export default ActivityFeed;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',

    },
    item: {
        marginTop: 20

    },
    list: {
        paddingHorizontal: 17,
        backgroundColor: "#E6E6E6",
    }
})
