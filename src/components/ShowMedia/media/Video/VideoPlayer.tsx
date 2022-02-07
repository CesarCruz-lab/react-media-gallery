import { GalleryProps } from 'interfaces/Gallery';
import React from 'react';
import { VideoBox } from './VideoPlayer.style';

interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  media: GalleryProps | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ media, ...rest }) => {
  return (
    <VideoBox { ...rest }>
      <video src={media?.path} controls />
    </VideoBox>
  );
};

export default VideoPlayer;
