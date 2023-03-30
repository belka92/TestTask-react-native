import React from "react";
import { View, Image, ScrollView, Pressable } from "react-native";

import { Card } from "../../components/view";
import { Description } from "../../components/shared";

import { useStyles } from "./MyBooksScreen.styles";

const MyBooksScreen = ({ navigation }: any) => {
  const { styles } = useStyles();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.book}>
        <Card
          title="Book Name"
          cardImage={() => (
            <Pressable onPress={() => navigation.navigate("Book")}>
              <Image
                style={styles.image}
                source={require("../../assets/images/book1.jpeg")}
              />
            </Pressable>
          )}
        />
        <View style={styles.description}>
          <Description />
        </View>
      </View>
      <View style={styles.book}>
        <Card
          title="Book Name"
          cardImage={() => (
            <Pressable onPress={() => navigation.navigate("Book")}>
              <Image
                style={styles.image}
                source={require("../../assets/images/book2.jpeg")}
              />
            </Pressable>
          )}
        />
        <View style={styles.description}>
          <Description />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyBooksScreen;
