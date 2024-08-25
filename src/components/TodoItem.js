import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../todoSlice";
import dayjs from "dayjs";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import LinearProgress from "@mui/material/LinearProgress";

// Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TodoItem({ todo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const distance = dayjs(todo.deadLine).diff(dayjs(), "day");
  const timeStatus =
    distance === 0 ? "today" : distance < 0 ? "past" : "future";
  const string =
    timeStatus === "today"
      ? "Today"
      : `${Math.abs(Number(distance))} days ${timeStatus}`;
  const timeLeft = 24 - dayjs().hour() + (dayjs().minute() * 5) / 300;

  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          sx={{ width: "12rem", flexShrink: 0 }}
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

            <Chip
              label={string}
              variant="filled"
              color={
                (timeStatus === "today" && "success") ||
                (timeStatus === "future" && "info") ||
                (timeStatus === "past" && "default")
              }
              sx={{ mt: 2 }}
            />
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
      </Box>
      {timeStatus === "today" && (
        <LinearProgress
          variant="determinate"
          value={100 - (timeLeft * 100) / 24}
          color={
            (timeLeft >= 14 && "success") ||
            (timeLeft >= 4 && "warning") ||
            "error"
          }
          sx={{ height: 6 }}
        />
      )}
    </Card>
  );
}

export default TodoItem;
