import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AircraftCard from "../AircraftCard/AircraftCard";

const AircraftList = ({ pagedData }) => {
  return (
    <FlatList
      data={pagedData.data}
      keyExtractor={(item) => item.tail_number}
      renderItem={({ item }) => (
        <View style={styles.itemSpacing} key={item.tail_number}>
          <AircraftCard data={item} />
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

export default AircraftList;
