import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { editTodo } from "../todoSlice";

function EditTask() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const todos = useSelector((state) => state.todo);
  const curTodo = todos.find((todo) => todo.id === id);
  console.log(curTodo);

  const [title, setTitle] = useState(curTodo.title);
  const [description, setDescription] = useState(curTodo.details);
  const [imgUrl, setImgUrl] = useState(curTodo.imgUrl);
  const [isCompleted, setIsCompleted] = useState(curTodo.completed);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;

    dispatch(
      editTodo({ id: curTodo.id, title, description, isCompleted, imgUrl })
    );

    navigate("/");
  }

  return (
    <Container>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", pt: 4 }}
        >
          Edit Task
        </Typography>

        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          required
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          required
          fullWidth
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />

        <ToggleButtonGroup
          value={`${isCompleted}`}
          onChange={(e) => setIsCompleted(e.target.value)}
          color="primary"
          exclusive
          fullWidth
          sx={{ mb: 2 }}
        >
          <ToggleButton value="true">COMPLETED</ToggleButton>
          <ToggleButton value="false">NOT COMPLETED</ToggleButton>
        </ToggleButtonGroup>

        <TextField
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          label="Picture URL"
          placeholder="https://www.website.image.com/picture.jpg"
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button type="submit" variant="contained" fullWidth>
          EDIT
        </Button>
      </Box>
    </Container>
  );
}

export default EditTask;
