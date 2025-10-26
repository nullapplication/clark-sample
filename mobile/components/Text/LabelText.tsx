import { StyleSheet, Text, View } from 'react-native';

export default function LabelText({ children }) {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>{children}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {},
   text: {
      fontSize: 16,
      color: '#6B6B6B',
   },
});
