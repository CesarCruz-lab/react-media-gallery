import React, { useCallback, useRef } from 'react';
import { useMediaGallery } from 'hooks/useMediaGallery';
import {
  InlinePreviewBox,
  InlinePreviewItem,
  InlinePreviewList,
  PreviewButton,
  PreviewContainer,
} from './InlinePreview.style';

// Icons
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import Video from './VideoPreview';

const InlinePreview: React.FC = () => {
  const { gallery, setSelectedMedia } = useMediaGallery();
  const inlinePreviewListRef = useRef<HTMLUListElement>(null);
  const inlinePreviewBoxRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    const listHeight = Number(inlinePreviewListRef.current?.getBoundingClientRect().height);
    const diff = Number(inlinePreviewBoxRef.current?.scrollLeft);

    inlinePreviewBoxRef.current?.scrollTo(diff + listHeight, 0);
  }, [inlinePreviewBoxRef, inlinePreviewListRef]);

  const previous = useCallback(() => {
    const listHeight = Number(inlinePreviewListRef.current?.getBoundingClientRect().height);
    const diff = Number(inlinePreviewBoxRef.current?.scrollLeft);

    inlinePreviewBoxRef.current?.scrollTo(diff - listHeight, 0);
  }, [inlinePreviewBoxRef, inlinePreviewListRef]);

  return (
    <PreviewContainer>
      <PreviewButton onClick={previous}>
        <BsArrowLeftShort style={{ width: 24, height: 24 }} />
      </PreviewButton>
      <InlinePreviewBox ref={inlinePreviewBoxRef}>
        <InlinePreviewList ref={inlinePreviewListRef}>
          {gallery?.map(media => (
            <InlinePreviewItem key={media.id} onClick={() => setSelectedMedia(media)}>
              {/image/.test(media.mimetype) && <img src={media.path} alt={media.mimetype} />}
              {/video/.test(media.mimetype) && <Video media={media} />}
            </InlinePreviewItem>
          ))}
        </InlinePreviewList>
      </InlinePreviewBox>
      <PreviewButton onClick={next}>
        <BsArrowRightShort style={{ width: 24, height: 24 }} />
      </PreviewButton>
    </PreviewContainer>
  );
};

export default InlinePreview;
