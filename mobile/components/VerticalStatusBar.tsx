import { StyleSheet, View } from 'react-native';

export default function ItemStatusBar({ isAlert, overrideColor = '#E20404' }) {
   return (
      <View
         style={[
            styles.itemStatusBarNormal,
            isAlert && {
               backgroundColor: overrideColor,
            },
         ]}
      />
   );
}

const styles = StyleSheet.create({
   itemStatusBarNormal: {
      width: 5,
      height: '100%',
      backgroundColor: '#08A000',
   },
});
