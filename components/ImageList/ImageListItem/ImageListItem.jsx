import React, { memo } from 'react';

import { ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

export const ImageListItem = memo((props) => {
  const styles = useStyles();
  const {
    src, tags,
    width, height
  } = props;
  const processedSrc = src.replace(/_(\d+)\.(.+)$/, (_, num, ext) => '__'+340+'.'+ext );

  return (
    <ListItem className={`${styles.root} grid-item`}>
      <img
        className={styles.img}
        src={processedSrc}
        alt={tags}
      />
    </ListItem>
  );
});

ImageListItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
