import {
  ListItemStyled,
  ImgStyled,
  VideoStyled,
  ResolutionStyled,
} from 'components/MediaList/MediaListItem/styled';
import { motion } from 'framer-motion';
import { memo, FC, MouseEvent } from 'react';
import { MediaType } from 'types/enums';
import { Hit } from 'types/index';
import { getImageUrlFromVideoMeta, getImageUrlFromImageMeta } from 'utils/index';

interface Props {
  hit: Hit;
  mediaType: MediaType;
}

export const MediaListItem: FC<Props> = memo(({ hit, mediaType }) => {
  const { previewURL, tags, webformatHeight, picture_id, videos } = hit;
  let imageUrl = '';
  if (mediaType === MediaType.IMAGE) {
    imageUrl = getImageUrlFromImageMeta(previewURL!);
  } else {
    imageUrl = getImageUrlFromVideoMeta(picture_id!);
  }
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <ListItemStyled
      mediaType={mediaType}
      imageHeight={webformatHeight! ?? 360}
      className={'grid-item'}
      component={motion.li}
      initial={'hidden'}
      animate={'visible'}
      variants={variants}
      button
    >
      {mediaType === MediaType.IMAGE ? (
        <ImgStyled src={imageUrl} alt={tags} />
      ) : (
        <>
          <ResolutionStyled>{videos!.large.height === 1080 ? 'HD' : '4K'}</ResolutionStyled>
          <VideoStyled
            poster={imageUrl}
            src={hit.videos!.tiny.url}
            muted={true}
            onMouseOver={(event: MouseEvent<HTMLVideoElement>) => event.currentTarget.play()}
            onMouseLeave={(event: MouseEvent<HTMLVideoElement>) => event.currentTarget.pause()}
          />
        </>
      )}
    </ListItemStyled>
  );
});
