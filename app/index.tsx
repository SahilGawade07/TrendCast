import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import NewsCard from "@/component/home/NewsCard"; 
import Trending from "@/component/home/TrendingCarousal";
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Trending />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F4F6", // Light gray background
  },
  container: {
    padding: 12,
  },
});

export default App;
