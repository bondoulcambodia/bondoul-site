import image1 from "@/assets/people/1.jpg";
import image2 from "@/assets/people/2.jpg";
import image3 from "@/assets/people/3.jpg";
import image4 from "@/assets/people/4.jpg";
import image5 from "@/assets/people/5.jpg";
import image6 from "@/assets/people/6.jpg";
import image7 from "@/assets/people/7.jpg";
import image8 from "@/assets/people/8.jpg";
import image9 from "@/assets/people/9.jpg";

const ImageScroller = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  return (
    <div className="pt-16 pb-10 relative overflow-hidden">
      {/* Gradient masks for fade effect */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

      {/* Scrolling container */}
      <div className="flex whitespace-nowrap md:animate-scroll animate-scroll-fast">
        {/* First set of images */}
        {images.map((img, index) => (
          <div key={`first-${index}`} className="w-72 h-48 flex-shrink-0 mx-2">
            <img
              src={img}
              alt={`Showcase image ${index + 1}`}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Duplicated set of images */}
        {images.map((img, index) => (
          <div key={`second-${index}`} className="w-72 h-48 flex-shrink-0 mx-2">
            <img
              src={img}
              alt={`Showcase image ${index + 1}`}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
