import Slider from "react-slick";
import { Box } from "@mui/material";
import { ImageGalleryLists } from "../../../Data/ImageGalleryLists";

export const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <Box sx={{ width: "100%", marginTop:'10px'}}>
      <Slider {...settings} style={{ width: "100%" }}>
        {ImageGalleryLists().map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.alt}
              style={{
                width: "100%", 
                height: "300px", 
                objectFit:"cover", 
                borderRadius:"10px"
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};
