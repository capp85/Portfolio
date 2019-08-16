import React, { Component } from "react";

//******* CSS *********/
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";

//********* MATERIAL UI **********/
import {Typography, Container, Link} from "@material-ui/core";

const styles = theme => ({
  contact: {
    backgroundColor: "#0C2340",
    backgroundSize: "100%"
    
  },

  button: {
    margin: theme.spacing(12),
    fontSize: 30,
  }
});

const contactLinks = [
  {
  href: "https://www.linkedin.com/in/josephserrato/",
  // imgSrc: "/icons/linkedin.png",
  imgAlt: 'LinkedIn',
  text: "LinkedIn",
},
{
  href: "mailto:joseph.serrato@gmail.com",
  imgSrc: "fas fa-envelope",
  imgAlt: 'Email',
  text: "Email",
},
{
  href: "https://github.com/capp85",
  // imgSrc: "fab fa-github",
  text: "GitHub",
},
];

class Contact extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <Container id="contact" style={{ width: '100%'}}>
        <div className={classes.contact}>
              {contactLinks.map((link, index) => (
                <Typography variant="button" align="left" noWrap>
                  <Link
                    className={classes.button}
                    color="secondary"
                    align="left"
                    href={link.href}
                  >
                    <img
                    src={`${process.env.PUBLIC_URL}${link.imgSrc}`} 
                    alt={link.imgAlt}                           
                    />
                    
                    {link.text}
                  </Link>
                </Typography>
              ))}
            </div>

        </Container>

        {/* <main >
          <div className={classes.heroContent} id="contact">
            <Container >
              <Button
                className={classes.button}
                color="secondary"
                href="https://www.linkedin.com/in/josephserrato/"
              >
                <i className="fab fa-linkedin">LinkedIn</i>
              </Button>

              <Button
                className={classes.button}
                color="secondary"
                href="mailto:joseph.serrato@gmail.com"
              >
                <i className="fas fa-envelope">Email</i>
              </Button>

              <Button
                className={classes.button}
                color="secondary"
                href="https://github.com/capp85"
              >
                <i className="fab fa-github">GitHub</i>
              </Button>
            </Container>
          </div>
        </main> */}

       
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Contact);
