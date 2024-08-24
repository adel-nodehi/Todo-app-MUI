import { useSelector } from "react-redux";

import Grid from "@mui/material/Unstable_Grid2";

import TodoItem from "./TodoItem";

function TodoList() {
  const todoDatas = useSelector((state) => state.todo);
  console.log(todoDatas);

  return (
    <Grid container spacing={3}>
      {todoDatas.map((todo) => (
        <Grid key={todo.id} xs={12} md={6} lg={4}>
          <TodoItem todo={todo} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TodoList;
