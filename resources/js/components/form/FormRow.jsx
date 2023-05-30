import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

const FormRow = ({
  label,
  type,
  value,
  name,
  placeholder,
  size,
  onChange,
  required,
  disabled,
  onFocus
}) => {
  return (
    <Box sx={{ mb: 1 }}>
      <InputLabel sx={{ fontSize: 13 }}>{label}</InputLabel>
      <TextField
        onChange={onChange}
        name={name}
        fullWidth={true}
        type={type}
        value={value}
        placeholder={placeholder}
        size={size}
        required={required}
        disabled={disabled}
        onFocus={onFocus? onFocus : () => {}}
      />
    </Box>
  );
};

export default FormRow;