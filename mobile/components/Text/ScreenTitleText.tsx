import { ReactNode } from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ScreenTitleText({ children }: { children: ReactNode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
  },
});
