import { Menu, Radio } from '@material-ui/core';
import { usePresenter } from 'components/Header/FilterMenus/SortMenu/usePresenter';
import { MenuItemStyled, LabelStyled } from 'components/Header/FilterMenus/styled';
import { FC } from 'react';
import { Order } from 'types/enums';
import { MenuItemProps } from 'types/index';

export const SortMenu: FC<MenuItemProps> = ({ anchorElt, open, onClose }) => {
  const { order, handleChange } = usePresenter();
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
          checked={order === Order.POPULAR}
          value={Order.POPULAR}
          control={<Radio onChange={handleChange} />}
          label={'популярные'}
          name={'radio-button-popularity'}
        />
      </MenuItemStyled>

      <MenuItemStyled onClick={handleClose}>
        <LabelStyled
          checked={order === Order.LATEST}
          value={Order.LATEST}
          control={<Radio onChange={handleChange} />}
          label={'последние'}
          name={'radio-button-popularity'}
        />
      </MenuItemStyled>
    </Menu>
  );
};
