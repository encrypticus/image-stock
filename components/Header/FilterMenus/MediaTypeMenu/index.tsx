import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { usePresenter } from 'components/Header/FilterMenus/MediaTypeMenu/usePresenter';
import { FC } from 'react';

export const MediaTypeMenu: FC = () => {
  const { mediaType, handleChange } = usePresenter();

  return (
    <FormControl variant="outlined" style={{ color: 'green' }}>
      <InputLabel id="select">Контент</InputLabel>
      <Select labelId="select" value={mediaType} onChange={handleChange} label="content">
        <MenuItem value="image">Изображения</MenuItem>
        <MenuItem value="video">Видео</MenuItem>
      </Select>
    </FormControl>
  );
};
