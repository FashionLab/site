/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Antitrademark from './products/Antitrademark';
import Blender from './products/Blender';
import Brandeye from './products/Brandeye';
import Distinct from './products/Distinct';
import Seasons from './products/Seasons';
import Topbar from './Topbar';
import Footer from './Footer';
import SectionHeader from './SectionHeader';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey.A500,
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 20,
    padding: 20,
    paddingBottom: 20,
  },
  grid: {
  },
});

const Products = (props) => {
  const { classes, location } = props;
  const currentPath = location.pathname;

  return (
    <>
      <CssBaseline />
      <Topbar currentPath={currentPath} />
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid spacing={10} alignItems="center" justify="center" container className={classes.grid}>
            <Grid item xs={12}>
              <SectionHeader
                title="Background"
                subtitle="Our products are built using generative adversarial networks trained on targetted slices of a proprietary dataset of millions of images. Underneath these models, we build data ingestion pipelines, annotation tooling, feature engineering pipelines,
              and other software products to keep our products up to date with the latest trends."
              />
              <SectionHeader title="Products" subtitle="An overview of our current suite of products." />
              <Blender />
              <Seasons />
              <Distinct />
              <Antitrademark />
              <Brandeye />
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

Products.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);
