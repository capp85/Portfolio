import React from "react";
import PropTypes from "prop-types";

// ******* CSS *******
import { withStyles } from "@material-ui/core/styles";

//******** MATERIAL UI ********
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(2),
    fontSize: 20
  },
  menuButton: {
    marginRight: 2
  },
  navButton: {
    display: "inline",
    textAlign: "right"
  },
  title: {
    flexGrow: 1
  }
});

const links = [
  {
    href: "#about",
    text: "About"
  },
  {
    href: "#card",
    text: "Portfolio"
  },
  {
    href: "#contact",
    text: "Contact"
  }
];

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar>
        <Container style={{ height: "100%" }}>
          <Toolbar 
          variant="dense"
          className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h5"
              color="secondary"
              align="left"
              className={classes.title}
            >
              JJS
            </Typography>
            <div className={classes.navButton}>
              {links.map(link => (
                <Typography variant="button" align="right" noWrap>
                  <Link
                    className={classes.button}
                    color="secondary"
                    align="right"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </Typography>
              ))}
            </div>

          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
