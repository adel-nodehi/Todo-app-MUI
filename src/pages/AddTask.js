import { useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Input from "../components/Input";
import Button from "../components/Button";

import { addTodo } from "../todoSlice";

function AddTask() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [deadLine, setDeadLine] = useState(dayjs());

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;
    if (deadLine === null || isNaN(deadLine.$D)) return;

    console.log(title, description, imgUrl, deadLine.format("MM/DD/YYYY"));

    dispatch(
      addTodo({
        title,
        description,
        imgUrl,
        deadLine: deadLine.format("MM/DD/YYYY"),
      })
    );

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

        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          required
          fullWidth
          sx={{ mb: 2 }}
        />

        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          required
          fullWidth
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />

        <DatePicker
          label="DeadLine *"
          defaultValue={deadLine}
          onChange={(newValue) => setDeadLine(newValue)}
          disablePast
          sx={{ mb: 2 }}
        />

        <Input
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          label="Picture URL"
          placeholder="https://www.website.image.com/picture.jpg"
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button type="submit" fullWidth>
          Add
        </Button>
      </Box>
    </Container>
  );
}

export default AddTask;
