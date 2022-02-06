import React from 'react';
import styled from 'styled-components';
import InlinePreview from 'components/Preview/Inline/InlinePreview';

const MediaGalleryContainer = styled('div')`
  width: 95vw;
  max-width: ${props => props.theme.breakpoints?.tablet}px;
  height: max-content;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing()};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  border-color: ${({ theme }) => theme.grey[100]};
  border-style: solid;
  border-width: 1px;
`;

const MediaGallery: React.FC = () => {
  return (
    <MediaGalleryContainer>
      <InlinePreview />
    </MediaGalleryContainer>
  );
};

export default MediaGallery;
