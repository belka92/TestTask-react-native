import { Card, ListItem } from "@rneui/themed";
import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Description } from "../../components/shared";
import { useStyles } from "./BookScreen.styles";

const BookScreen = () => {
  const { styles } = useStyles();

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title style={styles.title}>The Way of the Nameless</Card.Title>
        <Image
          style={styles.image}
          source={require("../../assets/images/book3.jpeg")}
        />
        <Text style={styles.author}>Author: Graham Douglass</Text>
        <Text style={styles.genre}>Genre: Fantasy</Text>
      </Card>
      <View style={styles.description}>
        <Description />
      </View>
      <View>
        <Text>hhhhhh</Text>
      </View>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>John Doe</ListItem.Title>
          <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
};

export default BookScreen;
