import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

export default function FormLabel({ children }: { children: ReactNode }) {
  return <Text style={styles.label}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    marginVertical: 8,
  },
});
