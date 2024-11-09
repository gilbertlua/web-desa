import { AppBar, Box, IconButton } from "@mui/material";

export default function SideRight(){
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position="static" sx={{backgroundColor:'grey.300'}} >
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    Check
                </IconButton>
            </AppBar>
        </Box>
    )
} 