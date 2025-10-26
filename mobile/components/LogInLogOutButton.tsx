import { View, Text, Button } from "react-native";
import NormalText from "./Text/NormalText";
import StyledButton from "./StyledButton";

export default function LogInLogOutButton() {
  // todo: add auth checks here for cognito
  // const loggedIn = user !== undefined && user !== null;

  // const onLogin = async () => {
  //    try {
  //       await authorize();
  //       let credentials = await getCredentials();
  //       console.log(credentials);
  //    } catch (e) {
  //       console.log(e);
  //    }
  // };

  // const onLogout = async () => {
  //    try {
  //       await clearSession();
  //    } catch (e) {
  //       console.log('Log out cancelled');
  //    }
  // };

  // return (
  //    <View>
  //       {user && <NormalText>You are logged in as {user.name}</NormalText>}
  //       {/* {!user && <NormalText>You are not logged in</NormalText>} */}

  //       <StyledButton
  //          onPress={loggedIn ? onLogout : onLogin}
  //          color="white"
  //          backgroundColor="blue"
  //          text={loggedIn ? 'Log Out' : 'Log In'}
  //       />
  //       {error && <NormalText>{error.message.toString()}</NormalText>}
  //    </View>
  // );

  return (
    <View>
      <NormalText>You are not logged in</NormalText>
    </View>
  );
}
