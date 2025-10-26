import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import InventoryCard from "../InventoryCard/InventoryCard";

const InventoryList = ({ pagedData }) => {
  return (
    <FlatList
      data={pagedData.data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemSpacing} key={item.id}>
          <InventoryCard item={item} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSpacing: {
    marginBottom: 12,
  },
});

export default InventoryList;
