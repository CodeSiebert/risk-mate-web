import { Container, Grid } from '@mui/material';
import type { FC } from 'react';

import AppRoutes from '../../config/routes/routes';

const Layout: FC = () => {
  return (
    <Container>
      <Grid container>
        <Grid className="navbar-wrapper">Nav</Grid>
        <Grid className="content-wrapper">
          <AppRoutes />
        </Grid>
        <Grid className="footer-wrapper">Footer</Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
