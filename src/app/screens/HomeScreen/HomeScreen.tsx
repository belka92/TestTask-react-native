import React from "react";
import { Text, Pressable, Image, ScrollView, View } from "react-native";

import { Card } from "../../components/view";
import { useStyles } from "./HomeScreen.styles";
import { MyButton, MyInput } from "../../components/shared";

const HomeScreen = ({ navigation }: any) => {
  const { styles } = useStyles();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MyInput />
        <MyButton />
      </View>

      <Pressable onPress={() => navigation.navigate("My Books")}>
        <Text style={styles.title}>My Books</Text>
      </Pressable>

      <ScrollView
        style={styles.content}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={true}
      >
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
      </ScrollView>

      <Pressable onPress={() => navigation.navigate("Books")}>
        <Text style={styles.title}>Books</Text>
      </Pressable>

      <ScrollView
        style={styles.content}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={true}
      >
        <Card
          title="Book Name"
          cardImage={() => (
            <Pressable onPress={() => navigation.navigate("Book")}>
              <Image
                style={styles.image}
                source={require("../../assets/images/book3.jpeg")}
              />
            </Pressable>
          )}
        />
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
        <Card
          title="Book Name"
          cardImage={() => (
            <Pressable onPress={() => navigation.navigate("Book")}>
              <Image
                style={styles.image}
                source={require("../../assets/images/book4.jpeg")}
              />
            </Pressable>
          )}
        />

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
        <Card
          title="Book Name"
          cardImage={() => (
            <Pressable onPress={() => navigation.navigate("Book")}>
              <Image
                style={styles.image}
                source={require("../../assets/images/book3.jpeg")}
              />
            </Pressable>
          )}
        />
      </ScrollView>
      <Pressable onPress={() => navigation.navigate("My Books")}>
        <Text style={styles.title}>Recommendations</Text>
      </Pressable>

      <ScrollView
        style={styles.content}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={true}
      >
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
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;
