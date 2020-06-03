import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

/**
 * 1) Settle all the required fields
 * 2) Accept request button to navigate to ChatScreen
 * 3) Sends notification
 */
const PostEnglish = (props: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          Items I can carry: {props.children.itemsCanCarry.toString()}{" "}
        </Text>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          Destination: {props.children.destination.toString()}
        </Text>
        <View>
          <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
            Returning by{" "}
            {props.children.returnTime.toString().substring(16, 21)}hrs
          </Text>

          <TouchableOpacity onPress={() => props.navigate()}>
            <Text style={styles.request}>Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const PostTamil = (props: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          நான் கொண்டு செல்லக்கூடிய பொருட்கள்:{" "}
        </Text>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          {props.children.itemsCanCarry.toString()}
          நான் எங்கே போகிறேன்: {props.children.destination.toString()}
        </Text>
        <View>
          <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
            நான் எந்த நேரத்தில் திரும்பி வருகிறேன்:{" "}
            {props.children.returnTime.toString().substring(16, 21)}hrs
          </Text>
          <TouchableOpacity onPress={() => props.navigate()}>
            <Text style={styles.request}>கோரிக்கை</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const PostMalay = (props: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          bilangan ites: {props.children.itemsCanCarry.toString()}
        </Text>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          Destinasi: {props.children.destination.toString()}
        </Text>
        <View>
          <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
            kembali oleh:{" "}
            {props.children.returnTime.toString().substring(16, 21)}hrs
          </Text>
          <TouchableOpacity onPress={() => props.navigate()}>
            <Text style={styles.request}> Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const PostChinese = (props: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          我可以携带的物品: {props.children.itemsCanCarry.toString()}
        </Text>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          我要去的地方: {props.children.destination.toString()}
        </Text>
        <View>
          <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
            我什么时候回来:
            {props.children.returnTime.toString().substring(16, 21)}hrs
          </Text>
          <TouchableOpacity onPress={() => props.navigate()}>
            <Text style={styles.request}>要求</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Post = (props: any) => {
  console.log(props.language);
  switch (props.language) {
    case "ENGLISH":
      return PostEnglish(props);
    case "CHINESE":
      return PostChinese(props);
    case "MALAY":
      return PostMalay(props);
    case "TAMIL":
      return PostTamil(props);
    default:
      return PostEnglish(props);
  }
};

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
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  request: {
    textDecorationLine: "underline",
  },
});
