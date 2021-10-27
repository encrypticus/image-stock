import { ListItemStyled, ImgStyled } from 'components/ImageList/ImageListItem/styled';
import { motion } from 'framer-motion';
import { memo, FC } from 'react';
import { MediaType } from 'types/enums';
import { Hit } from 'types/index';
import { getImageUrlFromVideoMeta, getImageUrlFromImageMeta } from 'utils/index';

interface Props {
  hit: Hit;
  mediaType: MediaType;
}

export const ImageListItem: FC<Props> = memo(({ hit, mediaType }) => {
  const { previewURL, tags, webformatHeight, picture_id } = hit;
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
      imageHeight={webformatHeight! ?? 360}
      className={'grid-item'}
      component={motion.li}
      initial={'hidden'}
      animate={'visible'}
      variants={variants}
      button
    >
      <ImgStyled src={imageUrl} alt={tags} />
    </ListItemStyled>
  );
});
