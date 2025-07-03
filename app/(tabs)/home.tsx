import CategoryButton from "@/component/home/CategoryButton";
import NewsCard from "@/component/home/NewsCard";
import TrendingCard from "@/component/home/TrendingCard";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

// Type definitions
interface NewsItem {
  title: string;
  description?: string;
  image?: string;
  source?: string;
  category?: string;
  published_at: string;
  url?: string;
}

interface ApiResponse {
  data: NewsItem[];
  pagination?: {
    limit: number;
    offset: number;
    count: number;
    total: number;
  };
}

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onPress: () => void;
}

interface TrendingCardProps {
  item: NewsItem;
}

interface NewsCardProps {
  item: NewsItem;
}

const API_URL =
  "https://api.mediastack.com/v1/news?access_key=6108e11b54af5425a827d301f0aed4d2&keywords=tennis&countries=us,gb,de";

const Home: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Sports",
    "Politics",
    "Business",
    "Health",
    "Travel",
    "Science",
  ];

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data: ApiResponse = await response.json();

      if (data.data) {
        setNewsData(data.data);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  
  
  



  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Loading news...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const trendingNews = newsData.slice(0, 3);
  const latestNews = newsData.slice(3);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <Text style={styles.logo}>TrendCast</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Trending Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={trendingNews}
            renderItem={({ item }) => <TrendingCard item={item} />}
            keyExtractor={(item, index) => `trending-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trendingList}
          />
        </View>

        {/* Latest Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Latest</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <CategoryButton
                key={category}
                category={category}
                isSelected={selectedCategory === category}
                onPress={() => setSelectedCategory(category)}
              />
            ))}
          </ScrollView>

          {/* News List */}
          <FlatList
            data={latestNews}
            renderItem={({ item }) => <NewsCard item={item} />}
            keyExtractor={(item, index) => `latest-${index}`}
            scrollEnabled={false}
            contentContainerStyle={styles.newsList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  sourceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
  },
  menuButton: {
    padding: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  filterButton: {
    padding: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  seeAll: {
    fontSize: 14,
    color: "#007AFF",
  },
  seeAllButton: {
    position: "absolute",
    right: 20,
    top: 0,
  },
  trendingList: {
    paddingHorizontal: 20,
  },
  
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  
  newsList: {
    paddingHorizontal: 20,
  },
  
});

export default Home;