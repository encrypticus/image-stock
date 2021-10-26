import { ListItemStyled, ImgStyled } from 'components/ImageList/ImageListItem/styled';
import { motion } from 'framer-motion';
import { memo, FC } from 'react';
import { Hit } from 'types/index';

interface Props {
  hit: Hit;
}

export const ImageListItem: FC<Props> = memo(({ hit }) => {
  const { previewURL, tags, webformatHeight } = hit;
  const processedSrc = previewURL.replace(/_(\d+)\.(.+)$/, (_, num, ext) => '__' + 340 + '.' + ext);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <ListItemStyled
      imageHeight={webformatHeight}
      className={'grid-item'}
      component={motion.li}
      initial={'hidden'}
      animate={'visible'}
      variants={variants}
      button
    >
      <ImgStyled src={processedSrc} alt={tags} />
    </ListItemStyled>
  );
});
