import { useState } from "react";
import { useDispatch } from "react-redux";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addTodo } from "../todoSlice";

function AddTask() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;

    console.log(title, description, imgUrl);

    dispatch(addTodo({ title, description, imgUrl }));

    setTitle("");
    setDescription("");
    setImgUrl("");
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
          Add Task
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

        <TextField
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          label="Picture URL"
          placeholder="https://www.website.image.com/picture.jpg"
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button type="submit" variant="contained" fullWidth>
          Add
        </Button>
      </Box>
    </Container>
  );
}

export default AddTask;
