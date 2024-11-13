import { Typography, Box } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { ProgramLists } from '../../../Data/ProgramLists';
import { PieChart } from '@opd/g2plot-react';
import { ImageSlider } from "./ImageSlider";


const topPrograms = ProgramLists()
.sort((a, b) => b.progress - a.progress)
.slice(0, 3);

const data = topPrograms.map(program => ({
type: program.programName,
value: program.progress,
}));

const pieConfig = {
    height: 350,
    autoFit: true,
    padding: 'auto',
    radius: 1,
    data: [
        ...data,
        {
          type: 'Others',
          value: 100 - data.reduce((acc, item) => acc + item.value, 0), 
        },
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      visible: true,
      type: 'inner',
    },
    legend: {
      visible: false,
    },
  };

export const ImplementedProgram = () =>{    
    return(
        <Box sx={{padding:'10px'}}>
            <Grid container spacing={2} >
                <Grid size={6}>
                    <Box>
                        <Typography variant="p" sx={{fontWeight:'bolder'}}>
                            Program Terimplementasi
                        </Typography>
                    </Box>
                    
                    <PieChart style={{marginTop:'10px'}} {...pieConfig} />
                </Grid>
                <Grid size={6}>
                    <Box>                        
                        <Typography variant="p" sx={{fontWeight:'bolder'}}>
                            Dokumentasi Program
                        </Typography>
                    </Box>
                    <ImageSlider />
                </Grid>                
            </Grid>
        </Box>
            
    )
}