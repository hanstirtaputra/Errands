import React from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const ChatScreen = ({ route, navigation }) => {
  const [messages, setMessages] = React.useState([]);
  const language = route.params ? route.params.selectedLanguage : null;

  const getText = () => {
    switch (language) {
      case "ENGLISH":
        return "Hello I'll come back with what you need in a jiffy";

      case "CHINESE":
        return "我马上回来";

      case "MALAY":
        return "Saya akan kembali dengan barang-barangnya tidak lama lagi";

      case "TAMIL":
        return "வணக்கம் மோசமாக ஒரு கணத்தில் உங்களுடன் திரும்பி வாருங்கள்";

      default:
        return "Hello I'll come back with what you need in a jiffy";
    }
  };

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: getText(),
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Friendly Neighbour",
        },
      },
    ]);
  }, []);

  const onSend = (newMessages) => {
    setMessages(GiftedChat.append(messages, newMessages));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default ChatScreen;
