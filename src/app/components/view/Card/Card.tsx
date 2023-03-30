import React, { ReactNode } from "react";
import { View, Text, Pressable } from "react-native";
import navigation from "../../../../navigation";

import { useStyles } from "./Card.styles";

const Card = ({ title, cardImage }: CardProps) => {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      <View>{cardImage?.()}</View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Card;

export type CardProps = {
  title: string;
  cardImage?: (source?: { source: string }) => ReactNode;
};
