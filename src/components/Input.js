import TextField from "@mui/material/TextField";

function Input({
  value,
  onChange,
  label = "",
  required = false,
  fullWidth = false,
  multiline = false,
  rows = 1,
  placeholder = "",
  sx = {},
}) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      label={label}
      required={required}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      placeholder={placeholder}
      sx={sx}
    />
  );
}

export default Input;
