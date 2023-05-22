import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import React, { useState, useEffect } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import CreateExercise from "./Createexercise";
import ExerciseLogs from "./Exerciselogs";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigation = useNavigate();

  const [menuList, setMenuList] = React.useState([
    {
      name: "Exercise Logs",
      route: "Exerciselogs",
      icon: <FitnessCenterIcon />,
    },
    {
      name: "Create Exercises",
      route: "Createexercise",
      icon: <AddBoxIcon />,
    },
  ]);

  const [userData, setUserData] = useState("");

  const logOut = () => {
    localStorage.clear();
    navigation("/login");
  };

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");

        setUserData(data.data);

        if (data.data === "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./login";
        }
      });
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let moveScreen = (route) => {
    navigation(route);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuList.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => moveScreen(x.route)}>
              <ListItemIcon>{x.icon}</ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem className="text-danger link">
          <ListItemIcon onClick={logOut}>
            <LogoutIcon className="text-danger" />
          </ListItemIcon>
          <ListItemText onClick={logOut}>Sign Out</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Exercise Tracker App
          </Typography>
          <Typography className="mx-auto" variant="h6" noWrap component="div">
            <div className="d-flex justify-content-center align-items-center text-danger">
              <h4 className="res">
                Welcome,{" "}
                <span className="text-primary badge badge-pill bg-warning">
                  {userData.name}
                </span>{" "}
                to my app
              </h4>

              <h2>Welcome to my app!</h2>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />

        <Routes>
        <Route path="/" element={<ExerciseLogs />} />
          <Route path="Exerciselogs" element={<ExerciseLogs />} />
          <Route path="Createexercise" element={<CreateExercise />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Dashboard;

