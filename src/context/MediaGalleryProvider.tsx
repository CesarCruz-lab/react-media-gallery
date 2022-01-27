import React, { createContext, useCallback, useEffect, useState } from 'react';

// Utils
import { generateHash } from 'utils/generateHash';

// Types
import { SetState } from 'interfaces/SetState';

export interface MediaGalleryContextProps {
  gallery: GalleryProps[] | null;
  setGallery: SetState<GalleryProps[] | null>;
}

export interface MediaGalleryProviderProps {
  media: string[];
}

export interface GalleryProps {
  id: string;
  path: string;
  size: number;
  mimetype: string;
}

export const MediaGalleryContext = createContext<MediaGalleryContextProps | null>(null);

const MediaGalleryProvider: React.FC<MediaGalleryProviderProps> = ({ media, children }) => {
  const [gallery, setGallery] = useState<GalleryProps[] | null>(null);

  const blobToBase64: (blob: Blob) => Promise<string> = useCallback((blob: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = reject;
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }, []);

  const handleMedia = useCallback(async () => {
    const mediaData: GalleryProps[] = [];

    media.length &&
      media.forEach(async (item, index) => {
        const res = await fetch(item);
        const blob = await res.blob();
        const url = await blobToBase64(blob);

        mediaData.push({
          id: generateHash(),
          path: url,
          size: blob.size,
          mimetype: blob.type,
        });

        if (index === media.length - 1) setGallery(mediaData);
      }); 
  }, [media, blobToBase64]);

  useEffect(() => {
    handleMedia();
  }, [handleMedia]);

  console.log(gallery)

  return (
    <MediaGalleryContext.Provider
      value={{
        gallery,
        setGallery,
      }}
    >
      {children}
    </MediaGalleryContext.Provider>
  );
};

export default MediaGalleryProvider;
