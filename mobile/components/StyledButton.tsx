import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function StyledButton({
   text = 'Button',
   backgroundColor = '#F4F4F4',
   color = '#000',
   onPress,
   icon = null,
   justifyContent = 'center',
}) {
   switch (backgroundColor) {
      case 'danger':
         backgroundColor = '#F8C0C0';
         break;
      case 'success':
         backgroundColor = '#BFEECF';
         break;
   }

   return (
      <TouchableOpacity
         onPress={onPress}
         style={[styles.container, { backgroundColor, justifyContent }]}
      >
         <Text style={[styles.text, { color }]}>{text}</Text>
         {icon}
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      padding: 20,
      alignItems: 'center',
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   text: {
      fontSize: 16,
   },
});
