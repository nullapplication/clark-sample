import { StyleSheet, View } from "react-native";

import { ReactNode } from "react";

export default function CardView({ children }: { children: ReactNode }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#E5E5E5",
    borderRadius: 10,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    flexDirection: "column",
    gap: 20,
  },
});
