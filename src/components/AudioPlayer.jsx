import "../index.css";
import { useRef } from "react";

function MyAudioPlayer({ audioSrc }) {
  const audioRef = useRef();

  return (
    <div>
      <audio controls autoplay>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default MyAudioPlayer;
