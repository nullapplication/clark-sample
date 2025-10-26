import { Image, View, StyleSheet, Text, Alert, Pressable } from "react-native";

export default function Form8130() {
  const handleInstallPartClick = () => {
    Alert.alert("Part Installed", "The part has been installed successfully.");
  };

  return (
    <View>
      <Text style={{ color: "green" }}>
        This looks like an FAA 8130-3 Form.
      </Text>
      <Pressable onPress={handleInstallPartClick} style={styles.button}>
        <Text style={styles.buttonText}>Install Part</Text>
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
