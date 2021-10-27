/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import { List } from '@material-ui/core';
import { Spinner } from 'components/Spinner';
import styled from 'styled-components';

import { MediaData, Hit } from 'types/index';
import { ImageListItem } from 'components/ImageList/ImageListItem';
import { usePresenter } from 'components/ImageList/usePresenter';

interface Props {
  mediaData: MediaData;
}

export const ImageList: FC<Props> = ({ mediaData }) => {
  const { listRef, loading, hits, mediaType } = usePresenter(mediaData);

  const renderImageList = (mediaList: Hit[]) =>
    mediaList.map((mediaItem, index) => {
      const { id } = mediaItem;
      return <ImageListItem key={`${id}#${index}`} hit={mediaItem} mediaType={mediaType} />;
    });

  return (
    <>
      <ListStyled className={'grid'} ref={listRef}>
        {renderImageList(hits)}
      </ListStyled>
      {loading && <Spinner />}
    </>
  );
};

const ListStyled = styled(List)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;
