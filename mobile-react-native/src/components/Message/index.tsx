import React from "react";
import { View, Text } from "react-native";
import { MotiView } from "moti";
import moment from "moment";

import { styles } from "./styles";
import { UserAvatar } from "../UserAvatar";
import { MessageTypes } from "../../@types/types/Message";

export const Message: React.FC<{ data: MessageTypes }> = ({ data }) => {
  return (
    <MotiView
      style={styles.container}
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 700 }}
    >
      <Text style={styles.message}>{data.text}</Text>
      <View style={styles.messageFooter}>
        <UserAvatar size="small" imageUri={data.user.avatar_url} />
        <View>
          <Text style={styles.userName}>{data.user.name}</Text>
          <Text style={styles.createdAt}>
            {moment(data.created_at).format("DD/MM/YYYY - HH:MM:SS")}
          </Text>
        </View>
      </View>
    </MotiView>
  );
};
