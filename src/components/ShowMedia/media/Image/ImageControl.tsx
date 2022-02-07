import React from 'react';
import { GalleryProps } from 'interfaces/Gallery';
import { ImageControlBox } from './ImagesControl.style';

interface ImageControlProps {
  media?: GalleryProps | null;
}

const ImageControl: React.FC<ImageControlProps> = ({ media }) => {
  return (
    <ImageControlBox url={media?.path}>
      <img src={media?.path} alt={media?.mimetype} />
    </ImageControlBox>
  );
};

export default ImageControl;
