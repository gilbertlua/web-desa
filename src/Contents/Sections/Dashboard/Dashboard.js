import { Box } from "@mui/material"
import { ProgressProgram } from "./ProgressProgram"
import { ImplementedProgram } from "./ImplementedProgram"

export const Dashboard = () =>{
    return(
        <Box>
            <Box sx={{padding:'25px',bgcolor:'background.paper'}}>
                <ImplementedProgram/>
            </Box>
            <div style={{height:'10px'}}/>            
            <Box sx={{padding:'25px',bgcolor:'background.paper'}}>
                <ProgressProgram style={{width:'100%'}}/>
            </Box>    
        </Box>
    )
}