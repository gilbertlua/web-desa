import React from 'react';
import { Box, Divider, List,IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { SideLeftList } from '../../Data/SideLeftLists';
import YardIcon from '@mui/icons-material/Yard';
import LogoutIcon from '@mui/icons-material/Logout';


const SideLeft = ({linkClicked,title,onLogout}) => {
    const items = SideLeftList();
    
    // Selected item function
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (event, index, linkTo,titleclicked) => {
        setSelectedIndex(index);
        linkClicked(linkTo)
        title(titleclicked)
    };
    return (
        <Box sx={{bgcolor: 'background.paper', minHeight:'99vh'}}>
            <List>
                <ListItem>
                <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <YardIcon />
                </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 1000,
                        letterSpacing: '.1rem',
                        color: 'primary.main',
                        textDecoration: 'none',
                        }}
                    >
                        WEBSITE DESA
                    </Typography>
                </ListItem>

            </List>

            <Divider/>
                <nav>
                <List dense={true}>
                {items.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{borderRadius:'10%'}}>
                        <ListItemButton
                            selected={selectedIndex === index}
                            onClick={(event) => handleListItemClick(event, index,item.linkTo,item.title)}
                        >
                            <ListItemIcon
                                 sx={{
                                    color: selectedIndex === index ? 'primary.dark' : 'primary.light',
                                }}
                            >{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title}  sx={{
                                    color: selectedIndex === index ? 'primary.dark' : 'primary.light',
                                }}/>
                        </ListItemButton>
                    </ListItem>
                ))}


                
                <ListItem>
                    <ListItemText primary='&nbsp;'/>
                </ListItem>    
                <Divider/>
                <ListItem>
                    <ListItemText primary='&nbsp;'/>
                </ListItem>    
                <ListItem  disablePadding sx={{borderRadius:'10%'}}>
                        <ListItemButton
                            selected={selectedIndex === 100}                            
                            onClick={onLogout}
                        >
                            <ListItemIcon
                                 sx={{
                                    color: selectedIndex === 100 ? 'primary.dark' : 'primary.light',
                                }}
                            >
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Logout'  sx={{
                                    color: selectedIndex === 100 ? 'primary.dark' : 'primary.light',
                                }}
                                />
                        </ListItemButton>
                    </ListItem>
                
                </List>
            </nav>     
            
        </Box>
    ); 
};

export default SideLeft;
