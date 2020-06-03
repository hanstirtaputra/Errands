import React from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const ChatScreen = ({ route, navigation }) => {
  const [messages, setMessages] = React.useState([]);
  const num = route.params.screenType === 'activity' ? 2 : 1;


  const getText = () => {
    switch (language) {
      case "ENGLISH":
        return "Hello I'll come back with what you need soon";

      case "CHINESE":
        return "我马上回来";

      case "MALAY":
        return "Saya akan kembali dengan barang-barangnya tidak lama lagi";

      case "TAMIL":
        return "வணக்கம் மோசமாக ஒரு கணத்தில் உங்களுடன் திரும்பி வாருங்கள்";

      default:
        return "Hello I'll come back with what you need soon";
    }
  };

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        //text: getText(),
        image: "https://cdn1.productnation.co/stg/sites/3/5cad5b8fa6677.jpeg",
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
        _id: num,
      }}
    />
  );
};

export default ChatScreen;
