import MuiButton from "@mui/material/Button";

function Button({
  type = "button",
  variant = "contained",
  fullWidth = false,
  children,
}) {
  return (
    <MuiButton type={type} variant={variant} fullWidth={fullWidth}>
      {children}
    </MuiButton>
  );
}

export default Button;
