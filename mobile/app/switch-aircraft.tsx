import HeaderLink from "@/components/UI/HeaderLink/HeaderLink";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, Text } from "react-native";
import globalStyles from "@/app/styles";
import AircraftList from "@/components/Chat/ChatComponents/AircraftList/AircraftList";

export default function SwitchAircraftScreen() {
  const [aircraft, setAircraft] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/aircraft`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((payload) => {
        setAircraft(payload);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching aircraft:", err);
        setLoading(false);
      });
  }, []);

  const onSubmit = () => {
    Alert.alert("Switched aircraft");
  };

  return (
    <>
      <Stack.Screen
        name="switch-aircraft"
        options={{
          headerLeft: () => <HeaderLink href="/">Close</HeaderLink>,
          headerRight: () => (
            <Pressable onPress={onSubmit}>
              <Text style={globalStyles.darkBackgroundTextColor}>Save</Text>
            </Pressable>
          ),
        }}
      ></Stack.Screen>
      <AircraftList pagedData={aircraft} />
    </>
  );
}
