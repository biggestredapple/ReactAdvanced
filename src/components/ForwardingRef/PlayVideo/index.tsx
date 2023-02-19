
import { useRef } from "react";
import VideoPlayer from "./MyVideoPlayer";

const PlayVideoComponent = () => {

  const ref = useRef<HTMLVideoElement>(null);

  const PlayVideo = () => {
    if (ref.current) ref.current.play();
  }

  const PauseVideo = () => {
    if (ref.current) ref.current.pause()
  }

  return (
    <div className="flex mt-6 justify-center item-center">
      <div className="flex flex-col p-4 item-center justify-center">
        <button className="btn flex block mb-4" onClick={PlayVideo}>Play</button>
        <button className="btn flex" onClick={PauseVideo}>Pause</button>
      </div>
      <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" width="360" ref={ref} />
    </div>
  )
}

export default PlayVideoComponent;