import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import DefaultAvatar from "../../assets/avatar.png";

import { styles } from "./styles";
import { colors } from "../../theme";
import { UserAvatarProps } from "../../@types/types/UserAvatar";

const sizes = {
  small: {
    containerSize: 32,
    avatarSize: 28,
  },
  normal: {
    containerSize: 48,
    avatarSize: 42,
  },
};

const defaultAvatar = Image.resolveAssetSource(DefaultAvatar).uri;

export const UserAvatar: React.FC<UserAvatarProps> = ({
  imageUri,
  size = "normal",
}) => {
  const { avatarSize, containerSize } = sizes[size];
  return (
    <LinearGradient
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      colors={[colors.pink, colors.yellow]}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={{ uri: imageUri || defaultAvatar }}
        style={[
          styles.userAvatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
};
