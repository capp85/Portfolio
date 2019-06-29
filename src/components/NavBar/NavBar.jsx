import React from "react";
import PropTypes from 'prop-types';

// ******* CSS AND STYLING *******
import { withStyles } from "@material-ui/core/styles";

//******** MATERIAL UI ******** 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Asap Condensed',
    ],
  },

});



class NavBar extends React.Component {
  render() {
    const { classes } = this.props; 

    return (
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>

            <Typography variant="h6" className={classes.title}>
              Joseph J Serrato 
          </Typography>
            <Button className={classes.button} color="inherit" href="/Cards" >Projects</Button>
            <Button className={classes.button} color="inherit">About</Button>
            <Button className={classes.button} color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);