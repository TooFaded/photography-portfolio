import SunFloImg1 from "../assets/reyna-sunflo1.jpeg";
import SunFloImg2 from "../assets/reyna-sunflo2.jpeg";
import SunFloImg3 from "../assets/reyna-sunflo3.jpeg";
import NightFlo1 from "../assets/night-flower1.jpeg";
import NightFlo2 from "../assets/night-flower2.jpeg";
import NightFlo3 from "../assets/night-flower3.jpeg";
import TrailImg1 from "../assets/trail-1.jpeg";
import TrailImg2 from "../assets/trail-2.jpeg";
import TrailImg3 from "../assets/trail-3.jpeg";

const photos = [
  { src: SunFloImg1, alt: "Photo 1" },
  { src: SunFloImg2, alt: "Photo 2" },
  { src: SunFloImg3, alt: "Photo 3" },
  { src: NightFlo1, alt: "Photo 4" },
  { src: NightFlo2, alt: "Photo 5" },
  { src: NightFlo3, alt: "Photo 6" },
  { src: TrailImg1, alt: "Photo 7" },
  { src: TrailImg2, alt: "Photo 8" },
  { src: TrailImg3, alt: "Photo 9" },
];

function PhotoGallery() {
  return (
    <div className="grid grid-cols-3 gap-6 m-6">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={photo.alt}
          className="hover:opacity-70 cursor-pointer"
        />
      ))}
    </div>
  );
}

export default PhotoGallery;
