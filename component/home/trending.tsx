import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Carousel from 'react-native-reanimated-carousel';

const news = [
  {
    title: "AI Revolutionizes Healthcare",
    categgory: "Technology",
    publisher: "Sahil Mohite",
    image: { uri: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" }
  },
  {
    title: "Climate Change Initiatives",
    categgory: "Environment",
    publisher: "Sahil Mohite",
   image: { uri: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" }
  },
  {
    title: "Tech Giants Release New Gadgets",
    categgory: "Technology",
    publisher: "Sahil Mohite",
   image: { uri: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" }
  },
  {
    title: "SpaceX Launches New Rocket",
    categgory: "Space",
    publisher: "Sahil Mohite",
   image: { uri: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80" }
  }
];

export default function Trending() {
    const { width: screenWidth } = Dimensions.get("window");
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View>
      <View style={{ height: 300 }}>
        <Carousel
          width={screenWidth}
          autoPlayInterval={3000}
          height={300}
          data={news}
          autoPlay
          loop
          onSnapToItem={setCurrentIndex}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
              <View style={styles.overlay}>
                <Text style={styles.overlaypublisher}>
                  {item.categgory}</Text>
                <Text style={styles.overlayTitle}>{item.title}</Text>
                <Text style={styles.overlaypublisher}>
                    {item.publisher}
                </Text>
            
              </View>
            </View>
          )}
        />
      </View>
     
    </View>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    flex: 1,
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    
    padding: 12,
  },
  overlayTitle: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  overlaypublisher: {
    color: "#000000",
    fontSize: 14,
  },
});