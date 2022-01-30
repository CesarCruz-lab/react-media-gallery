import { useContext } from 'react';
import { MediaGalleryContext, MediaGalleryContextProps } from 'context/MediaGalleryProvider';

export function useMediaGallery() {
  const gallery = useContext(MediaGalleryContext);
  return gallery as MediaGalleryContextProps;
}
