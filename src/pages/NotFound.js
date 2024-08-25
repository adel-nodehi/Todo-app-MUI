import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function NotFound() {
  return (
    <Container
      sx={{
        textAlign: "center",
        py: 5,
      }}
    >
      <Typography variant="h5" component="h1">
        Not Found. use the navigation to return to home.
      </Typography>
    </Container>
  );
}

export default NotFound;
