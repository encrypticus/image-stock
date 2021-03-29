import React from 'react';

import {
  FormControl, InputLabel, Select, MenuItem,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { changeMediaType } from '../../../../redux/reducers/media-data-reducer';

export const MediaTypeMenu = () => {
  const dispatch = useDispatch();
  const { mediaDataReducer: { mediaType } } = useSelector((state) => state);

  const handleChange = (event) => {
    dispatch(changeMediaType(event.target.value));
  };

  return (
    <FormControl variant="outlined" style={{ color: 'green' }}>
      <InputLabel id="select">Контент</InputLabel>
      <Select
        labelId="select"
        value={mediaType}
        onChange={handleChange}
        label="content"
      >
        <MenuItem value="image">Изображения</MenuItem>
        <MenuItem value="video">Видео</MenuItem>
      </Select>
    </FormControl>
  );
};
