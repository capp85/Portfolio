import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

// import OC from '../images/OC.png';

const backgroundImage = '../images.OC.png';

const styles = theme => ({
  // background: {
  //   position: 'relative',
  //   backgroundColor: theme.palette.grey[800],
  //   color: theme.palette.common.white,
  //   marginBottom: theme.spacing(4),
  //   backgroundImage: `url(../images/OC.png)`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  // },
});

class ImageContainer extends Component {
  render(props){
  const { classes } = this.props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '600px' }} >
                    <img style={{ display: 'none' }}
              src={backgroundImage}
              alt="background" />
          </Typography>

        
      </Container> 

      {/* <Container  backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="background" />
    </Container> */}
      <main>
        <Paper className={classes.background}>
          
            {/* <img style={{ display: 'none' }}
              src={OC}
              alt="background" />
           */}

        </Paper>
      </main>
    </React.Fragment>
  );
}
}

ImageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageContainer);