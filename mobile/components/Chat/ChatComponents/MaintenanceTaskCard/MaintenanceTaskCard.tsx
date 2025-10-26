import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Task {
  name: string;
  description: string;
  task_number: string;
  interval_cycles: string;
  interval_hours: string;
  interval_landings: string;
  next_due_cycles: string;
  next_due_hours: string;
  next_due_landings: string;
  ata_code: string;
  regulation_authority: string;
  last_performed_at: string;
}

const MaintenanceTaskCard = ({ task }: { task: Task }) => {
  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>{task.name}</Text>
      <Text style={styles.description}>{task.description}</Text>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        {/* Task Number */}
        <View style={styles.detailRow}>
          <MaterialCommunityIcons
            name="clipboard-text-outline"
            size={20}
            color="black"
          />
          <Text style={styles.label}>Task:</Text>
          <Text style={styles.value}>{task.task_number}</Text>
        </View>

        {/* Interval */}
        <View style={styles.detailRow}>
          <MaterialCommunityIcons name="reload" size={20} color="black" />
          <Text style={styles.label}>Intervals:</Text>
          {task.interval_hours && (
            <Text style={styles.value}>H: {task.interval_hours}</Text>
          )}
          {task.interval_cycles && (
            <Text style={styles.value}>C: {task.interval_cycles}</Text>
          )}
          {task.interval_landings && (
            <Text style={styles.value}>L: {task.interval_landings}</Text>
          )}
        </View>

        {/* Next Due */}
        <View style={styles.detailRow}>
          <MaterialCommunityIcons name="calendar" size={20} color="black" />
          <Text style={styles.label}>Next Due:</Text>
          {task.next_due_hours && (
            <Text style={styles.value}>H: {task.next_due_hours}</Text>
          )}
          {task.next_due_cycles && (
            <Text style={styles.value}>C: {task.next_due_cycles}</Text>
          )}
          {task.next_due_landings && (
            <Text style={styles.value}>L: {task.next_due_landings}</Text>
          )}
        </View>

        {/* ATA Code & Regulation */}
        <View style={styles.detailRow}>
          <MaterialCommunityIcons name="cube-outline" size={20} color="black" />
          <Text style={styles.label}>ATA Code:</Text>
          <Text style={styles.value}>{task.ata_code}</Text>
          <Text style={styles.value}>{task.regulation_authority}</Text>
        </View>

        {/* Created Date */}
        <View style={styles.detailRow}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={20}
            color="black"
          />
          <Text style={styles.label}>Last Performed:</Text>
          <Text style={styles.value}>
            {task.last_performed_at
              ? new Date(task.last_performed_at)?.toLocaleDateString()
              : "-"}
          </Text>
        </View>
      </View>

      {/* Status & Button */}
      <View style={styles.footer}>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Active</Text>
          <View style={styles.statusIndicator} />
        </View>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Work Record</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  detailsContainer: {
    backgroundColor: "#F3F4F6",
    padding: 12,
    marginTop: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#D1D5DB",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  label: {
    marginLeft: 6,
    fontWeight: "600",
    color: "#374151",
  },
  value: {
    marginLeft: 6,
    color: "#111827",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    fontWeight: "600",
    color: "#374151",
  },
  statusIndicator: {
    width: 8,
    height: 8,
    backgroundColor: "#FACC15",
    borderRadius: 4,
    marginLeft: 6,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

export default MaintenanceTaskCard;
