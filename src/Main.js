import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import SideLeft from './Contents/SideLeft/SideLeft';
import Header from './Contents/Headers/Header';

export default function Main() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid  size={3} 
        sx={{
          '--Grid-borderWidth': '1px',
          borderRight: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider'
        }}
        >
            <SideLeft/>
        </Grid>
        <Grid  size={9} sx={{ '& > :first-child': { border: '1px solid', borderColor: 'divider' } }}>
            <Header/>
        </Grid>
      </Grid>
    </Box>
  );
}
