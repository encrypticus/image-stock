import React from 'react';

import { ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

export const ImageListItem = (props) => {
  const styles = useStyles();
  const { src, tags } = props;

  return (
    <ListItem className={styles.root}>
      <img
        className={styles.img}
        src={src}
        alt={tags}
      />
    </ListItem>
  );
};

ImageListItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
