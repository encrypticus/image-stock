/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import { List } from '@material-ui/core';
import { Spinner } from 'components/Spinner';
import styled from 'styled-components';

import { MediaData, Hit } from 'types/index';
import { MediaListItem } from 'components/MediaList/MediaListItem';
import { usePresenter } from 'components/MediaList/usePresenter';

import { MasonryStyled } from 'components/MediaList/styled';

interface Props {
  mediaData: MediaData;
}

export const MediaList: FC<Props> = ({ mediaData }) => {
  const { listRef, loading, hits, mediaType } = usePresenter(mediaData);

  const renderMediaList = (mediaList: Hit[]) =>
    mediaList.map((mediaItem, index) => {
      const { id } = mediaItem;
      return <MediaListItem key={`${id}#${index}`} hit={mediaItem} mediaType={mediaType} />;
    });

  return (
    <>
      <MasonryStyled columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={1} ref={listRef}>
        {renderMediaList(hits)}
      </MasonryStyled>
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
