import formatTimeAgo from "@/utils/formatTimeAgo"; // ✅ adjust the path as needed
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface NewsCardProps {
  item: {
    image?: string;
    category?: string;
    title: string;
    source?: string;
    published_at: string;
  };
}

const NewsCard = ({ item }: NewsCardProps)  => (
  <TouchableOpacity style={styles.newsCard}>
    <Image
      source={{ uri: item.image || "https://via.placeholder.com/80x80" }}
      style={styles.newsImage}
    />
    <View style={styles.newsContent}>
      <Text style={styles.newsCategory}>{item.category || "General"}</Text>
      <Text style={styles.newsTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <View style={styles.newsMeta}>
        <View style={styles.sourceContainer}>
          <View style={styles.newsSourceLogo}>
            <Text style={styles.newsSourceLogoText}>
              {item.source?.charAt(0).toUpperCase() || "N"}
            </Text>
          </View>
          <Text style={styles.newsSourceName}>
            {item.source || "News Source"}
          </Text>
        </View>
        <Text style={styles.newsTimeAgo}>
          {formatTimeAgo(item.published_at)}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
const styles =StyleSheet.create({
  newsCard: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  newsImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    backgroundColor: "#f0f0f0",
  },
  newsContent: {
    flex: 1,
    padding: 12,
  },
  sourceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  newsCategory: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    lineHeight: 18,
  },
  newsMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  newsSourceLogo: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  newsSourceLogoText: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#fff",
  },
  newsSourceName: {
    fontSize: 12,
    color: "#666",
  },
  newsTimeAgo: {
    fontSize: 12,
    color: "#999",
  },
});

export default NewsCard;
