import LogInLogOutButton from "@/components/LogInLogOutButton";
import React from "react";
import { StyleSheet, View } from "react-native";
import ScreenTitleText from "@/components/Text/ScreenTitleText";
import SectionTitleText from "@/components/Text/SectionTitleText";
import NormalText from "@/components/Text/NormalText";
import { Stack } from "expo-router";
import SettingsActionMenu from "@/components/SettingsScreen/SettingsActionMenu";
import { AntDesign } from "@expo/vector-icons";
import HeaderLink from "@/components/UI/HeaderLink/HeaderLink";

export default function Settings() {
  return (
    <>
      <Stack.Screen
        name="settings"
        options={{
          headerLeft: () => (
            <HeaderLink href="/">
              <AntDesign name="left" size={24} color="#fff" />
            </HeaderLink>
          ),
          headerRight: () => <SettingsActionMenu />,
        }}
      ></Stack.Screen>
      <View style={styles.container}>
        <ScreenTitleText>Settings Original</ScreenTitleText>

        <View style={styles.content}>
          <SectionTitleText>Preferences</SectionTitleText>
          <NormalText>Coming soon</NormalText>

          <LogInLogOutButton />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    backgroundColor: "#fff",
    flex: 1,
  },
  content: {
    padding: 20,
    flexDirection: "column",
    gap: 10,
  },
});
