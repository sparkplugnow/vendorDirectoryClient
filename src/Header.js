import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import { FormControl, FormHelperText } from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Login from "./Features/Auth/Login";
import Home from "./Features/Home";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  root: {
    jusityContent: "center"
  }
});

  class Header extends Component {
  

  render() {
     const { classes } = this.props;
    return (
   <div> 
            <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                Vendor Directory
              </Typography>
              

      
            </Toolbar>
          </AppBar>
   </div>
  );

  }
}



export default withStyles(styles)(Header);