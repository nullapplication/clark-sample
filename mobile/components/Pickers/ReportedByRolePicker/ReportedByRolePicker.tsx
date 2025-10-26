import Picker from "../../UI/Picker/Picker";

const ReportedByRolePicker = ({ value, onChange }) => {
  const roles = [
    {
      value: "PILOT",
    },
    {
      value: "MAINTENANCE",
    },
    {
      value: "INSPECTOR",
    },
    {
      value: "OTHER",
    },
  ];

  return (
    <Picker
      data={roles}
      onChange={onChange}
      value={value}
      labelField="value"
      valueField="value"
      placeholder="Select who reported"
    />
  );
};

export default ReportedByRolePicker;
