import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

function InventoryItemCard({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Inventory</Text>
      <View style={styles.headerContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      </View>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <FontAwesome5 name="cube" size={16} />
          <Text>Serial Number: {item.serial_number}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome5 name="cubes" size={16} />
          <Text>
            Lot No.: {item.lot_number} Location: {item.location}
          </Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.detailItem}>
          <FontAwesome5 name="barcode" size={16} />
          <Text>Part Number: {item.product.part_number}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome5 name="industry" size={16} />
          <Text>
            Manufacturer: {item.product.manufacturer} Model:{" "}
            {item.product.model}
          </Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome5 name="boxes" size={16} />
          <Text>
            Quantity: {item.quantity} {item.unit_of_measure}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: "white",
  },
  title: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 14,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: "gray",
  },
  detailsContainer: {
    marginTop: 12,
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 8,
  },
  infoContainer: {
    marginTop: 8,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
});

export default InventoryItemCard;
