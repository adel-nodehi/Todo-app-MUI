import { useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import PersonIcon from "@mui/icons-material/Person";

const routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Add Task",
    path: "/add",
  },
];

function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box>
      <AppBar position="static" sx={{ m: 0 }}>
        <Toolbar
          sx={{
            bgcolor: "white",
            color: "text.primary",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <List
            sx={{
              display: "flex",
            }}
          >
            {routes.map((route) => (
              <ListItemButton
                key={route.title}
                onClick={() => navigate(route.path)}
                sx={[
                  location.pathname === route.path && { bgcolor: "whitesmoke" },
                ]}
              >
                <Typography>{route.title}</Typography>
              </ListItemButton>
            ))}
          </List>

          <Tooltip
            title="Open Setting"
            arrow
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -5],
                    },
                  },
                ],
              },
            }}
          >
            <Avatar>
              <PersonIcon
                sx={{
                  width: "80%",
                  height: "80%",
                }}
              />
            </Avatar>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {children}
    </Box>
  );
}

export default Layout;
