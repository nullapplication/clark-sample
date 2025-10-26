import MaintenanceTaskList from "@/components/Chat/ChatComponents/MaintenanceTaskList/MaintenanceTaskList";
import HeaderLink from "@/components/UI/HeaderLink/HeaderLink";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function DueListScreen() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const tail_number = "106EX"; // todo: replace with selected aircraft state

  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/aircraft/${tail_number}/due-list`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((payload) => {
        setTasks(payload);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching due list tasks:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Stack.Screen
        name="due-list"
        options={{
          headerLeft: () => <HeaderLink href="/">Close</HeaderLink>,
        }}
      ></Stack.Screen>
      <MaintenanceTaskList pagedData={tasks} />
    </>
  );
}
