import { useEffect, useState } from "react";
import io from "socket.io-client";
import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";
import { api } from "../../data/services/api";
import { MessageTypes } from "../../data/types/Message";

const messagesQueue: MessageTypes[] = [];

const socket = io("http://localhost:4000");

socket.on("new_message", (newMessage: MessageTypes) => {
  messagesQueue.push(newMessage);
});

export const MessageList = () => {
  const [messages, setMessages] = useState<MessageTypes[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length) {
        setMessages((prev) =>
          [messagesQueue[0], prev[0], prev[1]].filter(Boolean)
        );

        messagesQueue.shift();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get<MessageTypes[]>("/messages/recents");
        setMessages(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile-21" />
      <ul className={styles.messageList}>
        {messages.map((message) => (
          <li
            key={`${message.id || message.created_at}`}
            className={styles.message}
          >
            <p className={styles.messageContent}>{message.text}</p>
            <div className={styles.messageUser}>
              <div className={styles.userImg}>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>
              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
