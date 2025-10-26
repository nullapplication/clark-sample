import { StyleSheet, Text, View } from 'react-native';

export default function SectionTitleText({ children }) {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>{children}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {},
   title: {
      fontSize: 16,
      color: '#000',
   },
});
