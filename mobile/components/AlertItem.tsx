import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Href } from "expo-router";
import ItemStatusBar from "./VerticalStatusBar";
import NormalText from "./Text/NormalText";
import SupportingText from "./Text/SupportingText";

export default function AlertItem({
  alert,
}: {
  alert: {
    id: string;
    tailNumber?: number;
    title: string;
    description?: string;
    dueDate: Date;
  };
}) {
  return (
    <Link href={`/alerts/${alert.id}` as Href} key={alert.id} asChild>
      <Pressable>
        <View style={styles.container}>
          <ItemStatusBar isAlert={true} />
          <View style={styles.content}>
            <NormalText>{alert.tailNumber}</NormalText>
            <NormalText>{alert.title}</NormalText>
            <SupportingText>{alert.dueDate.toLocaleString()}</SupportingText>
            <Text style={styles.action}>Action Required</Text>
          </View>
          <View style={styles.navigationIndicator}>
            <AntDesign name="right" size={24} color="lightgrey" />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#fff",
  },
  content: {
    padding: 10,
    flexDirection: "column",
    gap: 10,
    flex: 1,
  },
  navigationIndicator: {
    padding: 10,
    justifyContent: "center",
  },
  action: {
    borderColor: "#F8C0C0",
    borderWidth: 1,
    padding: 10,
    width: 140,
    borderRadius: 5,
    fontSize: 16,
  },
});
