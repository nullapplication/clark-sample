import Octicons from "@expo/vector-icons/Octicons";
import { StyleSheet, Text, View } from "react-native";

export default function NormalAlertStatus() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Monitored aircraft appear in good standing.
      </Text>
      <Octicons name="shield-check" size={32} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#B9E9CB",
    padding: 20,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  text: {
    fontWeight: "bold",
    flex: 1,
  },
});
