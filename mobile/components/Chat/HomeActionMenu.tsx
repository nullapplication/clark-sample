// Using the provided hook
import { useActionSheet } from "@expo/react-native-action-sheet";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export default function HomeActionMenu() {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = [
      "Switch Aircraft",
      "Report Discrepancy",
      "View Due List",
      "Cancel",
      "Logout",
    ];
    const destructiveButtonIndex = options.length - 1;
    const cancelButtonIndex = options.length - 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 0:
            router.push("/switch-aircraft");
            break;
          case 1:
            router.push("/discrepancy");
            break;
          case 2:
            router.push("/due-list");
            break;
          case cancelButtonIndex:
            // Canceled
            break;
        }
      }
    );
  };

  return (
    <Pressable style={styles.menu} onPress={onPress}>
      <AntDesign name="ellipsis1" size={24} color="#fff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menu: {
    paddingRight: 20,
  },
});
