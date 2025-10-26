import { Image, View } from "react-native";
import logo from "@/assets/images/logo.png";

export default function AppLogo() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <Image
        source={logo}
        style={{ width: 200, height: 30 }}
        resizeMode="contain"
      />
    </View>
  );
}
