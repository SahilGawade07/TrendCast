import formatTimeAgo from "@/utils/formatTimeAgo"; // Adjust path as needed
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface TrendingCardProps {
  item: {
    image?: string;
    category?: string;
    title: string;
    source?: string;
    published_at: string;
  };
}

const TrendingCard = ({ item }: TrendingCardProps) => (
  <TouchableOpacity style={styles.trendingCard}>
    <Image
      source={{ uri: item.image || "https://via.placeholder.com/300x200" }}
      style={styles.trendingImage}
    />
    <View style={styles.trendingOverlay}>
      <Text style={styles.trendingCategory}>
        {item.category || "General"}
      </Text>
      <Text style={styles.trendingTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <View style={styles.trendingMeta}>
        <View style={styles.sourceContainer}>
          <View style={styles.sourceLogo}>
            <Text style={styles.sourceLogoText}>
              {item.source?.charAt(0).toUpperCase() || "N"}
            </Text>
          </View>
          <Text style={styles.sourceName}>
            {item.source || "News Source"}
          </Text>
        </View>
        <Text style={styles.timeAgo}>{formatTimeAgo(item.published_at)}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  trendingCard: {
    width: 280,
    height: 200,
    marginRight: 15,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  trendingImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  trendingOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 15,
  },
  trendingCategory: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 5,
    opacity: 0.8,
  },
  trendingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  trendingMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sourceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sourceLogo: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  sourceLogoText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  sourceName: {
    fontSize: 12,
    color: "#fff",
    opacity: 0.8,
  },
  timeAgo: {
    fontSize: 12,
    color: "#fff",
    opacity: 0.8,
  },
});

export default TrendingCard;
