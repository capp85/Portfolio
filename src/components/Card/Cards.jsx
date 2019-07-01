import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
// import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1100 + theme.spacing(3) * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto",
    }
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#005A9C",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    backgroundColor: "#D8D8D8",
    color: "inherit",
  },
 
});

const cards = [
  {
    key: 1,
    name: "Be Prepared",
    image: "../images/BP-image.png",
    technology:
      "Technology: Mongo, Express, React, Node, Axios, Bcrypt, Heroku, Material UI, JSON, QR Codes",
    href: "https://be-prepared-project.herokuapp.com/"
  },
  {
    key: 2,
    name: "Test Yo Self",
    image: "../images/TYS-image.png",
    technology:
      "Technology: Express, Handlebars, Joi, MySQL 2, NodeMailer, Passport, Sequelize, Socket.io, Passport, Morgan, Bcrypt.js, Heroku",
    href: "http://testyoselves.herokuapp.com/"
  },
  {
    key: 3,
    name: "Space Dashboard",
    image: "../images/SD-image.png",
    technology: "Technology: Express, Node-Sass, Axios, Moment, Heroku",
    href: "https://spacedashboard.herokuapp.com/"
  }
];

class Cards extends Component {
  render(props) {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />

        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* <Container  maxWidth="xl"> */}
            <Grid container spacing={6} id="card">
              {cards.map(card => (
                <Grid item key={card.key} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardHeader
                      className={classes.Header}
                      title={card.name}
                      avatar={
                        <Avatar aria-label="number" className={classes.avatar}>
                          {card.key}
                        </Avatar>
                      }
                    />
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography>{card.technology}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="medium" color="primary" href={card.href}>
                        Link
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* </Container> */}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);
