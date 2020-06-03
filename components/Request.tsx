import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const RequestEnglish = (props: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          Items I Need: {props.children.itemsNeed.toString()}{" "}
        </Text>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          When I Need It By: {props.children.whenNeed.toString()}
        </Text>
        <View>
          <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
            Where I Live:{" "}
            {props.children.whereLive.toString()}
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={() => props.navigate()}>
              <Text style={styles.request}>Assist</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.deleteRequest(props.id)}>
              <Text style={styles.request}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const RequestTamil = (props: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          நான் தேவைப்படும் பொருட்கள்:{" "}
        </Text>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          {props.children.itemsNeed.toString()}
          எனக்கு அது தேவைப்படும்போது்:
          {props.children.whenNeed.toString()}
        </Text>
        <View>
          <Text style={{ fontSize: props.elderly ? 25 : 18 }}>

            எங்கே நான் வாழ்:{" "}
            {props.children.whereLive.toString()}hrs
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={() => props.navigate()}>
              <Text style={styles.request}>உதவி</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.deleteRequest(props.id)}>
              <Text style={styles.request}>அழி</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const RequestMalay = (props: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          bilangan ites: {props.children.itemsNeed.toString()}
        </Text>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          Destinasi: {props.children.whenNeed.toString()}
        </Text>
        <View>
          <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
            kembali oleh:{" "}
            {props.children.whereLive.toString()}hrs
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={() => props.navigate()}>
              <Text style={styles.request}>
                menolong</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.deleteRequest(props.id)}>
              <Text style={styles.request}>Padam</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const RequestChinese = (props: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>

          我需要的物品: {props.children.itemsNeed.toString()}
        </Text>
        <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
          当我需要的时候方: {props.children.whenNeed.toString()}
        </Text>
        <View>
          <Text style={{ fontSize: props.elderly ? 25 : 18 }}>
            我生活的地方来:
            {props.children.whereLive.toString()}hrs
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={() => props.navigate()}>
              <Text style={styles.request}>帮助</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.deleteRequest(props.id)}>
              <Text style={styles.request}>删除</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const Request = (props: any) => {
  switch (props.language) {
    case "ENGLISH":
      return RequestEnglish(props);
    case "CHINESE":
      return RequestChinese(props);
    case "MALAY":
      return RequestMalay(props);
    case "TAMIL":
      return RequestTamil(props);
    default:
      return RequestEnglish(props);
  }
};

export default Request;

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
