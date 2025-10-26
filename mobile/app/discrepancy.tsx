import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Link, Stack, useNavigation } from "expo-router";
import HeaderLink from "@/components/UI/HeaderLink/HeaderLink";
import globalStyles from "@/app/styles";
import ToggleSwitch from "@/components/ToggleSwitch";
import FormLabel from "@/components/UI/FormLabel/FormLabel";
import ScreenTitleText from "@/components/Text/ScreenTitleText";
import AtaCodePicker from "@/components/Pickers/ATAPicker/ATAPicker";
import UnscheduledMaintenanceSeverityPicker from "@/components/Pickers/UnscheduledMaintenanceSeverityPicker/UnscheduledMaintenanceSeverityPicker";
import FlightPhasePicker from "@/components/Pickers/FlightPhasePicker/FlightPhasePicker";
import ReportedByRolePicker from "@/components/Pickers/ReportedByRolePicker/ReportedByRolePicker";

const ReportDiscrepancyScreen = () => {
  const navigation = useNavigation();

  // ui
  const [loading, setLoading] = useState(false);

  // form fields
  const [tailNumber, setTailNumber] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ataCode, setAtaCode] = useState("");
  const [severity, setSeverity] = useState("");
  const [reportedBy, setReportedBy] = useState("");
  const [flightPhase, setFlightPhase] = useState("");
  const [safetyImpact, setSafetyImpact] = useState(false);
  const [repeatIssue, setRepeatIssue] = useState(false);
  const [aircraftHours, setAircraftHours] = useState("");
  const [engineCycles, setEngineCycles] = useState("");
  const [landings, setLandings] = useState("");
  const [deferredUntil, setDeferredUntil] = useState(new Date());
  const [correctiveAction, setCorrectiveAction] = useState("");

  // Called when the form is submitted
  const onSubmit = async () => {
    setLoading(true);

    const unscheduledMaintenance = {
      title,
      description,
      ata_code: ataCode,
      severity,
      reported_by: reportedBy,
      flight_phase: flightPhase,
      safety_impact: safetyImpact,
      repeat_issue: repeatIssue,
      aircraft_time: parseInt(aircraftHours),
      engine_cycles: parseInt(engineCycles),
      landings: parseInt(landings),
      deferred_until: deferredUntil,
      corrective_action: correctiveAction,
    };

    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/aircraft/${tailNumber}/unscheduled-maintenance`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(unscheduledMaintenance),
        }
      );

      if (response.ok) {
        navigation.popToTop();
      } else {
        Alert.alert("Discrepancy could not save.");
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Date picker change handler
  const onChangeDate = (event, selectedDate) => {
    if (selectedDate) {
      setDeferredUntil(selectedDate);
    }
  };

  return (
    <>
      <Stack.Screen
        name="discrepancy"
        options={{
          headerLeft: () => <HeaderLink href="/">Cancel</HeaderLink>,
          headerRight: () => (
            <Pressable onPress={onSubmit}>
              <Text style={globalStyles.darkBackgroundTextColor}>Save</Text>
            </Pressable>
          ),
        }}
      ></Stack.Screen>
      <ScrollView style={styles.container}>
        <ScreenTitleText>Report Discrepancy</ScreenTitleText>
        <FormLabel>Tail Number</FormLabel>
        <TextInput
          style={styles.input}
          placeholder="Tail Number"
          value={tailNumber}
          onChangeText={setTailNumber}
        />

        <FormLabel>Title</FormLabel>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
        />

        <FormLabel>Description</FormLabel>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Enter description"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        <FormLabel>ATA Code</FormLabel>
        <AtaCodePicker value={ataCode} onChange={setAtaCode} />

        <FormLabel>Severity</FormLabel>
        <UnscheduledMaintenanceSeverityPicker
          value={severity}
          onChange={setSeverity}
        />

        <FormLabel>Reported By</FormLabel>
        <ReportedByRolePicker value={reportedBy} onChange={setReportedBy} />

        <FormLabel>Flight Phase</FormLabel>
        <FlightPhasePicker value={flightPhase} onChange={setFlightPhase} />

        <View style={styles.formRow}>
          <FormLabel>This discrepancy impacts safety</FormLabel>
          <ToggleSwitch value={safetyImpact} onValueChange={setSafetyImpact} />
        </View>

        <View style={styles.formRow}>
          <FormLabel>This discrepancy is a repeat issue</FormLabel>
          <ToggleSwitch value={repeatIssue} onValueChange={setRepeatIssue} />
        </View>

        <View style={styles.formRow}>
          <FormLabel>Defer discrepancy enforcement until</FormLabel>
          <DateTimePicker
            value={deferredUntil}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        </View>

        <FormLabel>Current Aircraft Hours</FormLabel>
        <TextInput
          style={styles.input}
          placeholder="Enter aircraft hours"
          value={aircraftHours}
          keyboardType="numeric"
          onChangeText={setAircraftHours}
        />

        <FormLabel>Current Engine Cycles</FormLabel>
        <TextInput
          style={styles.input}
          placeholder="Enter engine cycles"
          value={engineCycles}
          keyboardType="numeric"
          onChangeText={setEngineCycles}
        />

        <FormLabel>Current Landings</FormLabel>
        <TextInput
          style={styles.input}
          placeholder="Enter number of landings"
          value={landings}
          keyboardType="numeric"
          onChangeText={setLandings}
        />

        <FormLabel>Corrective Action</FormLabel>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Enter corrective action"
          multiline
          numberOfLines={4}
          value={correctiveAction}
          onChangeText={setCorrectiveAction}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  formRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  submitButton: {
    marginTop: 20,
  },
});

export default ReportDiscrepancyScreen;
