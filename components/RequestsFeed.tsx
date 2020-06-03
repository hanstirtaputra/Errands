import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Request from "./Request";

const RequestsFeed = (props) => {
  return (
    <SafeAreaView>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <Request
            children={item}
            elderly={props.elderly}
            navigate={props.navigate}
            language={props.selectedLanguage}
            deleteRequest={props.deleteRequest}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default RequestsFeed;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
  },
  item: {
    marginTop: 20,
  },
});
