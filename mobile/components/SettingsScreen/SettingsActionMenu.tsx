// Using the provided hook
import { useActionSheet } from "@expo/react-native-action-sheet";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function SettingsActionMenu() {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ["Cancel"];
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case cancelButtonIndex:
            break;
        }
      }
    );
  };

  return (
    <Pressable style={styles.menu} onPress={onPress}>
      <AntDesign name="ellipsis1" size={24} color="#7DC68D" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menu: {
    paddingRight: 20,
  },
});
