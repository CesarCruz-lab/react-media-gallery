import React, { useEffect, useRef } from 'react';
import { GalleryProps } from 'interfaces/Gallery';
import styled from 'styled-components';

interface VideoPreviewProps extends React.HTMLAttributes<HTMLVideoElement> {
  media: GalleryProps;
}

const Video = styled.video`
  width: 100%;
  height: 100%;
  background: #000;
`

const VideoPreview: React.FC<VideoPreviewProps> = ({ media, ...rest }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    function startPreview(videoElement: HTMLVideoElement) {
      videoElement.muted = true;
      videoElement.currentTime = 1;
      videoElement.playbackRate = 0.5;
      videoElement.play();
    }

    function stopPreview(videoElement: HTMLVideoElement) {
      videoElement.currentTime = 0;
      videoElement.playbackRate = 1;
      videoElement.pause();
    }

    startPreview(videoRef.current);

    setInterval(() => {
      if (!videoRef.current) return;

      stopPreview(videoRef.current);
      startPreview(videoRef.current);
    }, 3000);
  }, [videoRef]);

  return <Video ref={videoRef} src={media.path} {...rest} />;
};

export default VideoPreview;
