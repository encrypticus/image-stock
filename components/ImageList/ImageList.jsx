import React from 'react';

import { List } from '@material-ui/core';
import PropTypes from 'prop-types';

import { ImageListItem } from './ImageListItem';
import { useStyles } from './styles';

export const ImageList = ({ items }) => {
  const styles = useStyles();
  const { hits } = items;

  const renderImageList = (items) => (
    items.map(({ webformatURL, tags, id }) => (
      <ImageListItem
        key={id}
        src={webformatURL}
        tags={tags}
      />
    ))
  );

  return (
    <List className={styles.root}>
      {renderImageList(hits)}
    </List>
  );
};

ImageList.propTypes = {
  items: PropTypes.object.isRequired,
};
