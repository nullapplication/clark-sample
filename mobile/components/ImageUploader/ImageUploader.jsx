import React, { useState } from "react";
import {
  View,
  Button,
  Image,
  Alert,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";


const ImageUploader = ({ onUploadImageStart, onUploadImageComplete }) => {
  const [image, setImage] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to pick an image from the gallery
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "You need to allow access to the photo library."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      base64: true, // Get Base64 string
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setBase64Image(result.assets[0].base64);
    }
  };

  // Function to take a new photo using the camera
  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "You need to allow access to the camera."
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      base64: true, // Get Base64 string
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setBase64Image(result.assets[0].base64);
    }
  };

  // Function to upload the image to your API
  const uploadImage = async () => {
    if (!base64Image) {
      Alert.alert("No Image", "Please select or take a photo first.");
      return;
    }

    try {
      await onUploadImageStart();
      setMenuVisible(false);

      const url = `${process.env.EXPO_PUBLIC_API_URL}/ai/analyze-image`;
      console.log("url", url);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ base64Image }),
      });

      
      if (response.ok) {
        const payload = await response.json();
        console.log("API Response:", payload);
        await onUploadImageComplete(payload, image);
        setImage(null);
      } else {
        console.error("API Error:", response);
      }
    } catch (error) {
      console.error("Upload error:", error);
      Alert.alert("Error", "Failed to upload image.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Circular button with "+" icon */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setMenuVisible(!menuVisible)}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>

      {/* Modal for image selection menu */}
      <Modal transparent visible={menuVisible} animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.menuContainer}>
            {image && (
              <>
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200, marginBottom: 10 }}
                />
                <Button
                  title="Upload Image"
                  onPress={uploadImage}
                  style={styles.menuItem}
                />
                <Button
                  title="Cancel"
                  onPress={() => {
                    setImage(null);
                    setMenuVisible(false);
                  }}
                  style={styles.menuItem}
                />
              </>
            )}
            {!image && (
              <>
                <Button
                  title="Pick an Image"
                  onPress={pickImage}
                  style={styles.menuItem}
                />
                <Button
                  title="Take a Photo"
                  onPress={takePhoto}
                  style={styles.menuItem}
                />
              </>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "#3C80CD",
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    // backgroundColor: "rgba(0,0,0,0.3)",
  },
  menuContainer: {
    position: "absolute",
    bottom: 125,
    left: 10,
    backgroundColor: "rgba(255,255,255, 1)",
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    elevation: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  menuItem: {
    padding: 20,
    marginTop: 10,
    backgroundColor: "red",
  },
});

export default ImageUploader;
