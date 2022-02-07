import React from 'react';
import { useMediaGallery } from 'hooks/useMediaGallery';
import ImageControl from './media/Image/ImageControl';
import VideoPlayer from './media/Video/VideoPlayer';
import { ShowMediaBox } from './ShowMedia.style';

const ShowMedia: React.FC = () => {
  const { selectedMedia } = useMediaGallery();

  return (
    <ShowMediaBox>
      {/image/.test(selectedMedia?.mimetype || '') && <ImageControl media={selectedMedia} />}
      {/video/.test(selectedMedia?.mimetype || '') && <VideoPlayer media={selectedMedia} />}
    </ShowMediaBox>
  );
};

export default ShowMedia;
