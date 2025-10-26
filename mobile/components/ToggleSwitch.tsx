import { Switch } from 'react-native';

export default function ToggleSwitch({ value, onValueChange }) {
   const toggleSwitch = () => onValueChange(!value);

   return (
      <Switch
         trackColor={{ false: 'green', true: 'red' }}
         thumbColor={'#f4f3f4'}
         ios_backgroundColor="green"
         onValueChange={() => toggleSwitch()}
         value={value}
         style={{
            transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
         }}
      />
   );
}
