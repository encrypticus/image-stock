import { Menu, Radio } from '@material-ui/core';
import { usePresenter } from 'components/Header/FilterMenus/ImageTypeMenu/usePresenter';
import { MenuItemStyled, LabelStyled } from 'components/Header/FilterMenus/styled';
import { FC } from 'react';
import { ImageType } from 'types/enums';
import { MenuItemProps } from 'types/index';

export const ImageTypeMenu: FC<MenuItemProps> = ({ anchorElt, open, onClose }) => {
  const { image_type, handleChange } = usePresenter();
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
          checked={image_type === ImageType.ALL}
          value={ImageType.ALL}
          control={<Radio onChange={handleChange} />}
          label="все"
          name="radio-button-image"
        />
      </MenuItemStyled>

      <MenuItemStyled onClick={handleClose}>
        <LabelStyled
          checked={image_type === ImageType.PHOTO}
          value={ImageType.PHOTO}
          control={<Radio onChange={handleChange} />}
          label="фото"
          name="radio-button-image"
        />
      </MenuItemStyled>

      <MenuItemStyled onClick={handleClose}>
        <LabelStyled
          checked={image_type === ImageType.ILLUSTRATION}
          value={ImageType.ILLUSTRATION}
          control={<Radio onChange={handleChange} />}
          label="иллюстрация"
          name="radio-button-image"
        />
      </MenuItemStyled>

      <MenuItemStyled onClick={handleClose}>
        <LabelStyled
          checked={image_type === ImageType.VECTOR}
          value={ImageType.VECTOR}
          control={<Radio onChange={handleChange} />}
          label="вектор"
          name="radio-button-image"
        />
      </MenuItemStyled>
    </Menu>
  );
};
