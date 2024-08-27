import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Input from "../components/Input";
import Button from "../components/Button";

import { editTodo } from "../todoSlice";
import Modal from "../components/Modal";

function EditTaskModal() {
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
  const [deadLine, setDeadLine] = useState(dayjs());

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;
    if (deadLine === null || isNaN(deadLine.$D)) return;

    dispatch(
      editTodo({
        id: curTodo.id,
        title,
        description,
        isCompleted,
        imgUrl,
        deadLine: deadLine.format("MM/DD/YYYY"),
      })
    );

    navigate("/");
  }

  function handleCloseModal() {
    navigate("/");
  }

  return (
    <Modal open onClose={handleCloseModal}>
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
          sx={{ textAlign: "center" }}
        >
          Edit Task
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

        <Button type="submit" variant="contained" fullWidth>
          EDIT
        </Button>
      </Box>
    </Modal>
  );
}

export default EditTaskModal;
