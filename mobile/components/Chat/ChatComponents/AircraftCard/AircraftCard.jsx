import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

function AircraftCard({ data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Aircraft</Text>
      <Image
        source={require("../../../../assets/images/aircraft/dassault_falcon_7x.jpg")}
        style={styles.image}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.tailNumber}>
          {data.tail_number}, {data.serial_number}
        </Text>
        <Text style={styles.model}>{data.model}</Text>
      </View>
      <Text style={styles.manufacturer}>
        {data.manufacturer}, mfg. {data.year_of_manufacture}
      </Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <FontAwesome5 name="clock" size={16} />
          <Text> Total Flight Hours: {data.total_flight_hours}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome5 name="sync-alt" size={16} />
          <Text> Engine Cycles: {data.engine_cycles}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome5 name="clock" size={16} />
          <Text> Engine Hours: {data.engine_hours}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome5 name="plane-arrival" size={16} />
          <Text> Landings: {data.landings}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome5 name="calendar-alt" size={16} />
          <Text>
            {" "}
            Last Flight Date:{" "}
            {new Date(data.last_flight_date).toLocaleDateString()}
          </Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <Text
          style={
            data.status === "ACTIVE" ? styles.activeBadge : styles.inactiveBadge
          }
        >
          {data.status}
        </Text>
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
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    marginTop: 8,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  tailNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  model: {
    fontSize: 18,
    fontWeight: "600",
  },
  manufacturer: {
    color: "gray",
  },
  detailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  statusContainer: {
    marginTop: 16,
    alignItems: "flex-end",
  },
  activeBadge: {
    backgroundColor: "green",
    color: "white",
    padding: 4,
    borderRadius: 4,
  },
  inactiveBadge: {
    backgroundColor: "gray",
    color: "white",
    padding: 4,
    borderRadius: 4,
  },
});

export default AircraftCard;
