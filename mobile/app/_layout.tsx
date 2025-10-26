import { Link, Stack } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import HomeActionMenu from "@/components/Chat/HomeActionMenu";
import AppLogo from "@/components/AppLogo";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import SettingsActionMenu from "@/components/SettingsScreen/SettingsActionMenu";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#1E2631" }}>
        <ActionSheetProvider>
          <Stack
            screenOptions={{
              headerShown: true,
              headerTitle: () => <AppLogo />,
              headerTitleAlign: "center",
              headerRight: () => <HomeActionMenu />,
              headerStyle: {
                backgroundColor: "#1E2631",
              },
            }}
          />
        </ActionSheetProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
