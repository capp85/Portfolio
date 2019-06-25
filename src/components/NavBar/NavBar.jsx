import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit * 2,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },

});



class NavBar extends Component {
  render() {
    const { classes } = this.props; 

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>

            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              Joseph J Serrato 
          </Typography>
            <Button className={classes.button} color="inherit">Projects</Button>
            <Button className={classes.button} color="inherit">About</Button>
            <Button className={classes.button} color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
}


export default withStyles(styles)(NavBar);