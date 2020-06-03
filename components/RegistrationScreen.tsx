import React from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";
import Fire from '../firebase/Fire';

export default class SignUp extends React.Component {
  state = {
    name: "",
    password: "",
    email: "",
    phone_number: "",
    postal_code: ""
  };

  fire = new Fire();

  onPressCreate = async () => {
    try {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      await this.fire.createAccount(user)
        .then(() => this.props.navigation.navigate("LoginScreen"));
    } catch (message) {
      console.log('create account failed. catch error:');
    }
  };

  onChangeText = (key: any, val: any) => {
    this.setState({ [key]: val });
  };

  signUp = () => {
    this.props.navigation.navigate("LoginScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Registration</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("name", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("password", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("email", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("phone_number", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Postal Code"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("postal_code", val)}
        />
        <Button title="Sign Up" onPress={this.onPressCreate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#4a668c",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingBottom: 100,
    fontSize: 40,
  },
  button: {},
});
