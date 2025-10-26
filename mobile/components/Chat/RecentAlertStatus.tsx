import { Text, View, StyleSheet } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

export default function RecentAlertStatus() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        We've detected some potential issues needing your attention
      </Text>
      <Octicons name="shield-x" size={32} color="#E20404" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#F7E5E6",
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
