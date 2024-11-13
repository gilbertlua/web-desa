import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box,Avatar, Typography, Divider } from '@mui/material';
import { AnnaunchmentLists } from '../../../Data/AnnaunchmentLists';

export default function Announcement() {
  return (
    <div>
        <Box >                    
            {AnnaunchmentLists().map((item,index) =>(
                <Accordion key={index} defaultExpanded={index===0 ? true:false} sx={{border:'solid 1px devider'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                        <Box gap={2} sx={{display:'flex', alignItems:'center'}}>
                            <Avatar alt="Remy Sharp" src="https://avatar.iran.liara.run/public" />
                            <Typography variant='p' sx={{fontWeight:'bolder'}}>{item.senderName}</Typography>
                        </Box>

                        
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.paragraph}
                        <br/>
                        <br/>
                        <Divider/>
                            <Box sx={{marginTop:'12px'}}>
                                <Typography variant='p' sx={{fontSize:'13px'}}>{item.timeStamp}</Typography>
                            </Box>
                        </AccordionDetails>

                </Accordion>                    
            ))}
        </Box>
    </div>
  );
}
