import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import OC from '../../OC.png';

const backgroundImage = '../../OC.png';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
});

function ImageContainer(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg" ClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="oc" />
        <Typography component="div" style={{  backgroundColor: '#cfe8fc', height: '200px' }} />
      </Container>
     </React.Fragment>
  );
}

ImageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageContainer);