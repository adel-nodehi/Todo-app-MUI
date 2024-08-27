import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import TodoList from "../components/TodoList";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <Container>
      <Outlet />

      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center", pt: 4 }}
      >
        Taskes
      </Typography>

      <TodoList />
    </Container>
  );
}

export default HomePage;
