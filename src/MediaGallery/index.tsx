import React from 'react';
import InlinePreview from 'components/Preview/Inline/InlinePreview';
import ShowMedia from 'components/ShowMedia/ShowMedia';
import { Div, MediaGalleryContainer } from './style';

const MediaGallery: React.FC = () => {
  return (
    <Div>
      <MediaGalleryContainer>
        <ShowMedia />
        <InlinePreview />
      </MediaGalleryContainer>
    </Div>
  );
};

export default MediaGallery;
