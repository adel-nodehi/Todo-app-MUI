import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../todoSlice";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TodoItem({ todo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ width: "12rem" }}
        image={todo.imgUrl}
        title="green iguana"
      />
      <Box>
        <CardContent>
          <IconButton onClick={() => dispatch(toggleCompleted(todo.id))}>
            {todo.completed ? (
              <CheckCircleIcon fontSize="large" color="success" />
            ) : (
              <CheckCircleOutlineIcon fontSize="large" />
            )}
          </IconButton>

          <Typography gutterBottom variant="h5" component="div">
            {todo.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {todo.details}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
            color="error"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <DeleteIcon />
          </IconButton>

          <IconButton
            color="primary"
            onClick={() => navigate(`/edit/${todo.id}`)}
          >
            <EditIcon />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}

export default TodoItem;
