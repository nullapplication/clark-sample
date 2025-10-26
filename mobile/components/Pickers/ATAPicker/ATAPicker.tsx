import React, { useState, useEffect } from "react";
import Picker from "../../UI/Picker/Picker";

const AtaCodePicker = ({ value, onChange }) => {
  const [ataCodes, setAtaCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/ata-codes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((payload) => {
        // console.log(payload.data);
        setAtaCodes(payload.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching ATA codes:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <Picker
      data={ataCodes}
      onChange={onChange}
      value={value}
      labelField="chapter"
      valueField="code"
      placeholder="Select ATA Code"
    />
  );
};

export default AtaCodePicker;
