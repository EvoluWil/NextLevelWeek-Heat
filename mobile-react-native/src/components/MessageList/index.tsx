import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { Message } from "../Message";
import { MessageTypes } from "../../@types/types/Message";
import { api } from "../../services/api";
import { io } from "socket.io-client";

let messagesQueue: MessageTypes[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on("new_message", (message: MessageTypes) => {
  messagesQueue.push(message);
});

export const MessageList: React.FC = ({}) => {
  const [currentMessages, setCurrentMessages] = useState<MessageTypes[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages((prev) => [messagesQueue[0], prev[0], prev[1]]);
        messagesQueue.shift();
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchNewMessages = async () => {
      const messagesResponse = await api.get<MessageTypes[]>(
        "/messages/recents"
      );
      setCurrentMessages(messagesResponse.data);
    };
    fetchNewMessages();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message) => (
        <Message key={message.id || message.created_at} data={message} />
      ))}
    </ScrollView>
  );
};
