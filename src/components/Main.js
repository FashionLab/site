/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-state */
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import React, { Component } from 'react';

import InstructionDialog from './dialogs/InstructionDialog';
import SwipeDialog from './dialogs/SwipeDialog';
import Topbar from './Topbar';
import Footer from './Footer';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    background: 'url(img/background.jpg) no-repeat',
    backgroundSize: 'cover',
  },
  grid: {
    marginTop: 10,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
    },
  },
  paperMain: {
    minHeight: '70vh',
    width: '100%',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  paper: {
    minHeight: 500,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    color: theme.palette.secondary.light,
    padding: 50,
    backgroundColor: 'rgba(60, 72, 78, .8)',
  },
  paperDark: {
    minHeight: 500,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    color: theme.palette.secondary.main,
    padding: 50,
    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
  mainTitle: {
    // color: theme.palette.secondary.light,
    color: theme.palette.secondary.light,
    '-webkit-text-stroke-width': '.5px',
    '-webkit-text-stroke-color': theme.palette.secondary.dark,
    fontSmooth: 'always',
    fontWeight: 'bold',
    fontSize: '180px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '100px',
    },
  },
  title: {
    color: theme.palette.secondary.light,
  },
  titleDark: {
    color: theme.palette.secondary.dark,
  },
  titleLight: {
    color: theme.palette.primary.light,
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2),
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
    width: 152,
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    margin: 'auto',
    maxWidth: 1000,
  },
  boxMain: {
    width: '100%',
    minHeight: 300,
    margin: 'auto',
    textAlign: 'center',
    maxWidth: 1000,
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10,
  },
  buttonBar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  noBorder: {
    borderBottomStyle: 'hidden',
  },
  loadingState: {
    opacity: 0.05,
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%',
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUsDialog: false,
      productsDialog: false,
      contactDialog: false,
    };
  }

  componentDidMount() {}

  openAboutUsDialog = () => {
    this.setState({ aboutUsDialog: true });
  }

  openProductsDialog = () => {
    this.setState({ productsDialog: true });
  }

  openContactDialog = () => {
    this.setState({ contactDialog: true });
  }

  dialogClose = () => {
    this.setState({
      aboutUsDialog: false,
      productsDialog: false,
      contactDialog: false,
    });
  }

  render() {
    const { classes } = this.props;
    const { productsDialog, contactDialog } = this.state;
    return (
      <>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Paper className={classes.paperMain}>
                <div className={classes.boxMain}>
                  <Typography variant="h1" className={classes.mainTitle} gutterBottom>
                    Intelligent Design.
                  </Typography>
                  <Typography variant="h2" color="primary" gutterBottom />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paperDark}>
                <div className={classes.box}>
                  <Typography variant="h3" className={classes.title} gutterBottom>
                    Human Design. Machine Intelligence.
                  </Typography>
                  <Typography variant="h6" gutterBottom color="primary">
                    State of the art machine learning models for fashion design,
                    trend forecasting, and brand management.

                    From trademark infringement detection to automated design
                    portfolio development, and everything in between.
                  </Typography>
                </div>
                <div className={classes.buttonBar}>
                  <Button onClick={this.openProductsDialog} color="secondary" variant="contained" className={classes.actionButtom}>
                    Products
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography variant="h3" className={classes.titleLight} gutterBottom>
                    Tailor-Made tools.
                  </Typography>
                  <Typography variant="h5" gutterBottom color="primary">
                    FashionLab provides a platform to help designers, not replace them.

                    Contact us to see how our tools can unlock your creative potential.
                  </Typography>
                </div>
                <div className={classes.buttonBar}>
                  <Button color="primary" variant="outlined" className={classes.actionButtom} component={Link} to="about">
                    About Us
                  </Button>
                  <Button onClick={this.openContactDialog} color="secondary" variant="contained" className={classes.actionButtom}>
                    Contact
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <SwipeDialog
            open={productsDialog}
            onClose={this.dialogClose}
          />
          <InstructionDialog
            open={contactDialog}
            onClose={this.dialogClose}
          />
        </div>
        <Footer />
      </>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Main));
