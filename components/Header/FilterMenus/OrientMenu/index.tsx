import { Menu, Radio } from '@material-ui/core';
import { usePresenter } from 'components/Header/FilterMenus/OrientMenu/usePresenter';
import { MenuItemStyled, LabelStyled } from 'components/Header/FilterMenus/styled';
import { FC } from 'react';
import { Orientation } from 'types/enums';
import { MenuItemProps } from 'types/index';

export const OrientMenu: FC<MenuItemProps> = ({ anchorElt, open, onClose }) => {
  const { orientation, handleChange } = usePresenter();
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
          checked={orientation === Orientation.ALL}
          value={Orientation.ALL}
          control={<Radio onChange={handleChange} />}
          label="любая"
          name="radio-button-orientation"
        />
      </MenuItemStyled>

      <MenuItemStyled onClick={handleClose}>
        <LabelStyled
          checked={orientation === Orientation.HORIZONTAL}
          value={Orientation.HORIZONTAL}
          control={<Radio onChange={handleChange} />}
          label="горизонтальная"
          name="radio-button-orientation"
        />
      </MenuItemStyled>

      <MenuItemStyled onClick={handleClose}>
        <LabelStyled
          checked={orientation === Orientation.VERTICAL}
          value={Orientation.VERTICAL}
          control={<Radio onChange={handleChange} />}
          label="вертикальная"
          name="radio-button-orientation"
        />
      </MenuItemStyled>
    </Menu>
  );
};
