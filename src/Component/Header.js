import React, { useState } from "react";
import style from "../assets/style.module.css";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import { makeStyles } from "@material-ui/core/styles";
import { RiMovie2Line } from "react-icons/ri";
import { createTheme } from '@material-ui/core/styles'

import {
  Switch,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
} from "@material-ui/core";

//classes à appliquer sur header
const useStyles = makeStyles({
  rightToolbar: {
    marginLeft: "auto",
    marginRight: 10,
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12,
  },
});

export default function Header({ setDark }) {
  //state controle dark and light mode
  const [darkMode, setDarkMode] = useState(false);

  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <div className={style.searchContainer}>
      <AppBar position="static">
        <ToolBar>
          <RiMovie2Line size={50} />
          <section className={classes.rightToolbar}></section>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <i>
              <Typography variant="h6">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </Typography>
            </i>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </ThemeProvider>
        </ToolBar>
      </AppBar>
    </div>
  );
}