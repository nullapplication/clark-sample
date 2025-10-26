import { StyleSheet, Text, View } from 'react-native';
export default function CurrencyAmount({ amount, currency = 'USD' }) {
   return (
      <View style={styles.container}>
         <Text style={styles.amount}>
            {amount.toLocaleString(undefined, {
               style: 'currency',
               currency: currency,
               minimumFractionDigits: 2,
               maximumFractionDigits: 2,
            })}
         </Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {},
   amount: {
      fontSize: 16,
      color: '#000',
   },
});
