import { forwardRef } from "react";

interface Props {
  src: string,
  type: string
  width: string
}

const VideoPlayer = forwardRef<HTMLVideoElement, Props>(function VideoPlayer({ src, type, width }, ref) {
  return (
    <video width={width} ref={ref} className="p-4">
      <source src={src} type={type} />
    </video>
  )
})

export default VideoPlayer;