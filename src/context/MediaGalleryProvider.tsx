import React, { createContext, useCallback, useEffect, useState } from 'react';

// Utils
import { generateHash } from 'utils/generateHash';
import { createTheme } from 'Theme/theme';

// Types
import { SetState } from 'interfaces/SetState';
import { ThemeProvider } from 'styled-components';
import { ThemeModelProps } from 'Theme/theme';
import { GalleryProps } from 'interfaces/Gallery';

export type CustomThemeProps = {
  mode: 'light' | 'dark';
  theme: ThemeModelProps;
};

export interface MediaGalleryContextProps {
  gallery: GalleryProps[] | null;
  setGallery: SetState<GalleryProps[] | null>;
  themeMode: 'light' | 'dark';
  setThemeMode: SetState<'light' | 'dark'>;
}

export interface MediaGalleryProviderProps {
  media: string[];
  customTheme?: CustomThemeProps;
}

export const MediaGalleryContext = createContext<MediaGalleryContextProps | null>(null);

const MediaGalleryProvider: React.FC<MediaGalleryProviderProps> = ({ media, customTheme, children }) => {
  const [gallery, setGallery] = useState<GalleryProps[] | null>(null);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(customTheme?.mode || 'light');

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

  return (
    <MediaGalleryContext.Provider
      value={{
        gallery,
        setGallery,
        themeMode,
        setThemeMode,
      }}
    >
      <ThemeProvider theme={createTheme(themeMode, customTheme?.theme)}>{children}</ThemeProvider>
    </MediaGalleryContext.Provider>
  );
};

export default MediaGalleryProvider;
