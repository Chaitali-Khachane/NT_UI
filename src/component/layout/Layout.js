import React from 'react';
import { Grid } from '@nt/dds-react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <main className="display-flex flex-grow-1">
    <Grid fluid className="paddingtop-xl paddingbottom-xl flex-grow-1">
      <div className="padding-xl bgcolor-white height-100p border-bottom">{children}</div>
    </Grid>
  </main>
);

Layout.propTypes = {
  children: PropTypes.node
};

Layout.displayName = 'Layout';
export default Layout;
