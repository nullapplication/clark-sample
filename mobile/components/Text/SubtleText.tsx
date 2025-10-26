import { StyleSheet, Text, View } from 'react-native';

export default function SubtleText({ children }) {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>{children}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {},
   text: {
      fontSize: 14,
      color: '#a3a3a3',
   },
});
