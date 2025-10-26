import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MaintenanceTaskCard from "../MaintenanceTaskCard/MaintenanceTaskCard";

const MaintenanceTaskList = ({ pagedData }) => {
  return (
    <FlatList
      data={pagedData.data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemSpacing} key={item.id}>
          <MaintenanceTaskCard task={item} />
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

export default MaintenanceTaskList;
