import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";

import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static" sx={{ m: 0 }}>
        <Toolbar
          sx={{
            bgcolor: "white",
            color: "text.primary",
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <ListItemButton sx={{ flexGrow: 0 }} onClick={() => navigate("/")}>
            <Typography>Home</Typography>
          </ListItemButton>

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

      <Fab
        onClick={() => navigate("/add")}
        color="primary"
        sx={{
          position: "absolute",
          right: "2rem",
          bottom: "2rem",
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default Layout;
