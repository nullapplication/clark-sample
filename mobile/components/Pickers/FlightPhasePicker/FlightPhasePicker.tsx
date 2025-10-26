import Picker from "../../UI/Picker/Picker";

const FlightPhasePicker = ({ value, onChange }) => {
  const phases = [
    {
      value: "PREFLIGHT",
    },
    {
      value: "TAXI",
    },
    {
      value: "TAKEOFF",
    },
    {
      value: "CRUISE",
    },
    {
      value: "LANDING",
    },
  ];

  return (
    <Picker
      data={phases}
      onChange={onChange}
      value={value}
      labelField="value"
      valueField="value"
      placeholder="Select phase"
    />
  );
};

export default FlightPhasePicker;
