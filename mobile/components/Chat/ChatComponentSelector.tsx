import { Image, StyleSheet, View } from "react-native";
import AircraftList from "./ChatComponents/AircraftList/AircraftList";
import InventoryList from "./ChatComponents/InventoryList/InventoryList";
import InventoryLocationCard from "./ChatComponents/InventoryLocationCard/InventoryLocationCard";
import MaintenanceTaskList from "./ChatComponents/MaintenanceTaskList/MaintenanceTaskList";
import Form8130 from "./ChatComponents/Form8130/Form8130";
import DamagedComponent from "./ChatComponents/DamagedComponent/DamagedComponent";

export default function ChatComponentSelector({
  sender,
  renderCode,
  data,
  image,
}: {
  sender: string;
  renderCode: string | null;
  data: any | null;
  image: string | null;
}) {
  if (!renderCode) return null;

  return (
    <View
      style={[
        styles.container,
        sender === "user" ? styles.userMessage : styles.aiMessage,
      ]}
    >
      <View>
        {renderCode === "list_aircraft" && <AircraftList pagedData={data} />}
        {renderCode === "list_maintenance_item" && (
          <MaintenanceTaskList pagedData={data} />
        )}
        {renderCode === "image" && image && (
          <Image source={{ uri: image }} style={styles.imagePreview} />
        )}
        {renderCode === "image_damaged" && <DamagedComponent />}
        {renderCode === "image_8130" && <Form8130 />}
        {renderCode === "list_physical_inventory_item" && (
          <InventoryList pagedData={data} />
        )}
        {renderCode === "single_inventory_location" && (
          <InventoryLocationCard location={data} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    maxWidth: "100%",
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
  },
  aiMessage: {
    alignSelf: "flex-start",
  },
});
