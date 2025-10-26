import { router } from "expo-router";
import { View, StyleSheet, Text, Pressable, Alert } from "react-native";

export default function DamagedComponent() {
  const handleReportDiscrepancy = () => {
    router.push("/discrepancy");
  };

  const handleCreateWorkOrder = () => {
    Alert.alert(
      "Work Order Created",
      "The work order has been created successfully."
    );
  };

  return (
    <View>
      <Text style={{ color: "red" }}>Damaged component/inventory.</Text>
      <Pressable onPress={handleReportDiscrepancy} style={styles.button}>
        <Text style={styles.buttonText}>Report Discrepancy</Text>
      </Pressable>
      <Pressable onPress={handleCreateWorkOrder} style={styles.button}>
        <Text style={styles.buttonText}>Create Work Order</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3C80CD",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
  },
});
