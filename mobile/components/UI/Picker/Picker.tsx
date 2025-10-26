import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";
import globalStyles from "@/app/styles";

const Picker = ({
  data,
  value,
  onChange,
  placeholder,
  labelField,
  valueField,
}) => {
  const handleOnChange = (item) => {
    onChange(item.value);
  };

  return (
    <Dropdown
      data={data}
      onChange={handleOnChange}
      labelField={labelField}
      valueField={valueField}
      value={value}
      style={styles.dropdown}
      placeholder={placeholder}
      placeholderStyle={styles.placeholder}
      itemTextStyle={styles.item}
      selectedTextStyle={styles.item}
    />
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
  },
  dropdown: {
    ...globalStyles.formInput,
  },
  placeholder: {
    ...globalStyles.baseFont,
    color: "#ccc",
  },
  item: {
    ...globalStyles.baseFont,
    margin: 0,
    padding: 0,
    marginVertical: 0,
  },
});

export default Picker;
