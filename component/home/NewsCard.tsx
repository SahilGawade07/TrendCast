import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NewsCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://example.com/zelensky-interview.jpg" }} // Replace with your own image URL
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.category}>Europe</Text>
        <Text style={styles.headline} numberOfLines={1}>
          Ukraine&apos;s President Zelensky to BBC: Blood money being paid...
        </Text>
        <View style={styles.footer}>
          <Text style={styles.source}>BBC News</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.time}>14m ago</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "flex-start",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  category: {
    color: "#6B7280",
    fontSize: 12,
    marginBottom: 2,
  },
  headline: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#111827",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  source: {
    fontSize: 12,
    color: "#4B5563",
    marginLeft: 4,
  },
  dot: {
    fontSize: 12,
    marginHorizontal: 6,
    color: "#9CA3AF",
  },
  time: {
    fontSize: 12,
    color: "#9CA3AF",
  },
});

export default NewsCard;
