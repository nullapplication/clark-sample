import { StyleSheet, Text, View } from 'react-native';

export default function NormalText({ children }) {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>{children}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {},
   text: {
      color: '#000',
      flexWrap: 'wrap',
   },
});
