import React from 'react';
import MediaGallery from 'MediaGallery';
import MediaGalleryProvider from 'context/MediaGalleryProvider';
import media from 'utils/allMedia'

function App() {
  return (
    <React.Fragment>
      <MediaGalleryProvider media={media}>
        <MediaGallery />
      </MediaGalleryProvider>
    </React.Fragment>
  );
}

export default App;
