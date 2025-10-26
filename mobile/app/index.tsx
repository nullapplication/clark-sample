import { StyleSheet, View } from "react-native";
import React from "react";
import Chat from "@/components/Chat/Chat";
import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import HomeActionMenu from "@/components/Chat/HomeActionMenu";
import HeaderLink from "@/components/UI/HeaderLink/HeaderLink";

export default function Home() {
  return (
    <>
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => (
            <HeaderLink href="/settings">
              <Ionicons name="settings-outline" size={24} color="#fff" />
            </HeaderLink>
          ),
          headerRight: () => <HomeActionMenu />,
        }}
      ></Stack.Screen>
      <View style={styles.container}>
        <Chat />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
});
