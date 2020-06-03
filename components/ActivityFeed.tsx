import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Post from "./Post";

const ActivityFeed = (props) => {
  return (
    <SafeAreaView>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <Post
            children={item}
            elderly={props.elderly}
            navigate={props.navigate}
            language={props.selectedLanguage}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ActivityFeed;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
  },
  item: {
    marginTop: 20,
  },
});
