import SunFloImg1 from "../assets/reyna-sunflo1.jpeg";
import SunFloImg2 from "../assets/reyna-sunflo2.jpeg";
import SunFloImg3 from "../assets/reyna-sunflo3.jpeg";
import NightFlo1 from "../assets/night-flower1.jpeg";
import NightFlo2 from "../assets/night-flower2.jpeg";
import NightFlo3 from "../assets/night-flower3.jpeg";
import TrailImg1 from "../assets/trail-1.jpeg";
import TrailImg2 from "../assets/trail-2.jpeg";
import TrailImg3 from "../assets/trail-3.jpeg";
import DayFloImg1 from "../assets/day-flower1.jpeg";
import DayFloImg2 from "../assets/day-flower2.jpeg";
import DayFloImg3 from "../assets/day-flower3.jpeg";
import MyAudioPlayer from "./AudioPlayer";
import SmoothSong from "../assets/Smooth_By_Russ.mp3";
import FraudSong from "../assets/Fraud_By_Russ.mp3";
import NoMoreSong from "../assets/NoMore_By_Russ.mp3";
import EmptySong from "../assets/Empty_By_Russ.mp3";
import ILoveYouBoySong from "../assets/ILoveYouBoy_By_Russ.mp3";
import EnoughSong from "../assets/Enough_By_Russ.mp3";
import AdventureSong from "../assets/Adventure_By_Russ.mp3";
import OasisSong from "../assets/Oasis_By_Russ.mp3";
import FatimaSong from "../assets/Fatima_By_Russ.mp3";
import DistractedSong from "../assets/Distracted_By_Russ.mp3";
import TunnelVisionSong from "../assets/TunnelVision_By_Russ.mp3";
import TheWindSong from "../assets/The_Wind_By_Russ.mp3";

import { useState } from "react";

const photos = [
  { src: SunFloImg1, alt: "Photo 1", audio: SmoothSong },
  { src: SunFloImg2, alt: "Photo 2", audio: FraudSong },
  { src: SunFloImg3, alt: "Photo 3", audio: NoMoreSong },
  { src: NightFlo1, alt: "Photo 4", audio: EmptySong },
  { src: NightFlo2, alt: "Photo 5", audio: ILoveYouBoySong },
  { src: NightFlo3, alt: "Photo 6", audio: EnoughSong },
  { src: TrailImg1, alt: "Photo 7", audio: AdventureSong },
  { src: TrailImg2, alt: "Photo 8", audio: OasisSong },
  { src: TrailImg3, alt: "Photo 9", audio: FatimaSong },
  { src: DayFloImg1, alt: "Photo 10", audio: DistractedSong },
  { src: DayFloImg2, alt: "Photo 11", audio: TunnelVisionSong },
  { src: DayFloImg3, alt: "Photo 12", audio: TheWindSong },
];

function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setSelectedAudio(photo.audio);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setSelectedAudio(null);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 m-6 w-[80%] mx-auto">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="hover:opacity-60 cursor-pointer"
            onClick={() => openModal(photo)}
          />
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-white p-4 max-w-3xl">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto"
            />
            <div className="flex justify-around mt-2">
              <button
                onClick={closeModal}
                className="mb-2 mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
              >
                Close
              </button>
              <MyAudioPlayer audioSrc={selectedAudio} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default PhotoGallery;
