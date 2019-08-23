import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

//******* CSS *********/
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";

//********* MATERIAL UI **********/
import {Card, CardContent, CardMedia, CardHeader, CardActions,
Grid, Typography, Link }from "@material-ui/core";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1100 + theme.spacing(3) * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#005A9C"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1,
    color: "#D8D8D8",
  },
  avatar: {
    backgroundColor: "#0C2340",
    color: "#D8D8D8",
    fontSize: 30
  },
  cardHeader: {
    color: "#D8D8D8",
    fontSize: 30
  },
  technology: {
    fontSize:20,
  },
  role: {
    marginTop:10,
    fontSize:20,
  },
  title: {
    padding: 20
  }

});

const cards = [
  {
    name: "Be Prepared",
    image: "../images/BP-image.png",
    technology:
      "Technology: Axios, Mongoose, Express, React, Node, Bcrypt, Material UI, JSON, QR Codes, Heroku",
    site: "https://be-prepared-project.herokuapp.com/",
    code: "https://github.com/choco-taco/be-prepared",
  },
  {
    name: "Test Yo Self",
    image: "../images/TYS-image.png",
    technology:
      "Technology: Express, Express Handle-Bars, Joi, MySQL 2, NodeMailer, Passport, Sequelize, Socket.io, Morgan, Bcrypt.js, Heroku",
    site: "http://testyoselves.herokuapp.com/",
    code: "https://github.com/choco-taco/testyoselves"
  },
  {
    name: "Space Dashboard",
    image: "../images/SD-image.png",
    technology: "Technology: Express, Node-Sass, Axios, Moment, Heroku",
    site: "https://spacedashboard.herokuapp.com/",
    code: "https://github.com/choco-taco/space-dashboard"
  }
];

class Portfolio extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline/>

        <main id="card"> 
          <Typography
          component="h1"
          variant="h3"
          align="center"
          className={classes.title}>
            Portfolio
          </Typography>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={6} >
              {cards.map((card, index ) => (
                <Grid item key={index} xs={12} sm={6} md={4} >
                  <Card className={classes.card} >
                    <CardHeader 
                      title={
                        <Typography 
                        className={classes.cardHeader}
                        align="center" >
                          {card.name}
                        </Typography>
                      }
                    />

                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography className={classes.technology}>{card.technology}</Typography>

                    </CardContent>

                    <CardActions>
                      <Grid item xs={10}>
                        <Link variant="h5" color="secondary" href={card.site}>
                          Site
                        </Link>
                      </Grid>
                      <Link variant="h5" color="secondary" href={card.code}>
                        Code
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
