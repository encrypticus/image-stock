import { Menu, Radio } from '@material-ui/core';
import { MenuItemStyled, LabelStyled } from 'components/Header/FilterMenus/styled';
import { ChangeEvent, FC, useState } from 'react';
import { VideoType } from 'types/enums';
import { MenuItemProps } from 'types/index';

export const VideoTypeMenu: FC<MenuItemProps> = ({ anchorElt, open, onClose }) => {
  const [selectedValue, setSelectedValue] = useState<VideoType>(VideoType.ALL);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value as VideoType);
  };

  const handleClose = () => {
    setTimeout(onClose, 100);
  };

  return (
    <Menu
      anchorEl={anchorElt}
      open={open}
      onClose={onClose}
      keepMounted
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItemStyled onClick={handleClose}>
        <LabelStyled
          checked={selectedValue === VideoType.ALL}
          value={VideoType.ALL}
          control={<Radio onChange={handleChange} />}
          label="все"
          name="radio-button-video"
        />
      </MenuItemStyled>

      <MenuItemStyled onClick={handleClose}>
        <LabelStyled
          checked={selectedValue === VideoType.VIDEO}
          value={VideoType.VIDEO}
          control={<Radio onChange={handleChange} />}
          label="видео"
          name="radio-button-video"
        />
      </MenuItemStyled>

      <MenuItemStyled onClick={handleClose}>
        <LabelStyled
          checked={selectedValue === VideoType.ANIMATION}
          value={VideoType.ANIMATION}
          control={<Radio onChange={handleChange} />}
          label="анимация"
          name="radio-button-video"
        />
      </MenuItemStyled>
    </Menu>
  );
};
