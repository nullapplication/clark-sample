import React from "react";
import { View, StyleSheet } from "react-native";
import InventoryList from "../InventoryList/InventoryList";

const InventoryLocationCard = ({ location }) => {
  return (
    <View styles={styles.container}>
      <NormalText>{location.name}</NormalText>
      <InventoryList pagedData={location.inventory} />
    </View>
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

export default InventoryLocationCard;
