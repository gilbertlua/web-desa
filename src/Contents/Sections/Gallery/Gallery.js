import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageGalleryLists } from '../../../Data/ImageGalleryLists';
import { Box } from '@mui/material';
export default function Gallery() {
  return (
    <Box sx={{backgroundColor:'background.paper', padding:'5px'}}>
        <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
            {ImageGalleryLists().map((item,index) => (
                <ImageListItem key={index}>
                <img
                    srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.alt}
                    loading="lazy"
                    style={{
                        height:'200px',
                        objectFit:'cover'
                    }}
                />
                </ImageListItem>
            ))}
        </ImageList>
    </Box>
    
  );
}