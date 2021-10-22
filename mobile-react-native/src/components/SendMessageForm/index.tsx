import React, { useState } from "react";
import { View, TextInput, Alert, Keyboard } from "react-native";

import { styles } from "./styles";

import { Button } from "../Button";
import { colors } from "../../theme";
import { api } from "../../services/api";

export const SendMessageForm = () => {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleSendingMessage = async () => {
    const messageFormatted = message.trim();

    if (messageFormatted.length > 0) {
      setSendingMessage(true);
      await api.post("/messages", { message: messageFormatted });
      setMessage("");
      Keyboard.dismiss();
      setSendingMessage(false);
    } else {
      Alert.alert("A mensagem não pode ser em branco");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        keyboardAppearance={"dark"}
        placeholder="Abra seu coração com a comunidade..."
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        placeholderTextColor={colors.grayPrimary}
        editable={!sendingMessage}
      />
      <Button
        onPress={handleSendingMessage}
        title="DEIXE SUA MENSAGEM"
        color={colors.white}
        backgroundColor={colors.pink}
        icon="message1"
        isLoading={sendingMessage}
      />
    </View>
  );
};
