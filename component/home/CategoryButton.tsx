import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onPress: () => void;
}

const CategoryButton = ({ category, isSelected, onPress }: CategoryButtonProps) => (
  <TouchableOpacity
    style={[styles.categoryButton, isSelected && styles.selectedCategory]}
    onPress={onPress}
  >
    <Text
      style={[
        styles.categoryText,
        isSelected && styles.selectedCategoryText,
      ]}
    >
      {category}
    </Text>
  </TouchableOpacity>
);
export default CategoryButton;
const styles = StyleSheet.create({
    categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  selectedCategory: {
    backgroundColor: "#007AFF",
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
  },
  selectedCategoryText: {
    color: "#fff",
  },
});