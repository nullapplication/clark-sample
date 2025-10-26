import Picker from "../../UI/Picker/Picker";

const UnscheduledMaintenanceSeverityPicker = ({ value, onChange }) => {
  const severities = [
    {
      value: "LOW",
    },
    {
      value: "MODERATE",
    },
    {
      value: "HIGH",
    },
    {
      value: "GROUNDED",
    },
  ];

  return (
    <Picker
      data={severities}
      onChange={onChange}
      value={value}
      labelField="value"
      valueField="value"
      placeholder="Select severity"
    />
  );
};

export default UnscheduledMaintenanceSeverityPicker;
