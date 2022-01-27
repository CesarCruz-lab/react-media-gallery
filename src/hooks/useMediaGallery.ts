import { useContext } from 'react';
import { MediaGalleryContext } from 'context/MediaGalleryProvider';

export function useMediaGallery() {
  const gallery = useContext(MediaGalleryContext);
  return gallery;
}
