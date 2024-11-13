import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import SideLeft from './Contents/SideLeft/SideLeft';
import Header from './Contents/Headers/Header';
import { Dashboard } from './Contents/Sections/Dashboard/Dashboard';

export default function Main({onLogout}) {
  const [selectedLink, setSelectedLink] = React.useState(<Dashboard />);
  const [title, setTitle] =  React.useState('Dashboard');
  return (
    <Box sx={{ height: '100vh' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>

        <Grid item size={3}>
          <SideLeft linkClicked={setSelectedLink} title={setTitle} onLogout={onLogout} />
        </Grid>

        
        <Grid item size={9} sx={{ height: '100vh', overflow: 'hidden' }}>

          <Grid item sx={{ borderColor: 'divider' }}>
            <Header title={title} />
          </Grid>

          <Grid
            item
            sx={{
              marginTop: '10px',
              borderColor: 'divider',
              maxHeight: 'calc(100vh - 64px)', // Adjust based on Header height
              overflowY: 'scroll', // Enable scrolling
            }}
          >
            {selectedLink}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}