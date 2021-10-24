import { Menu, MenuItem } from '@material-ui/core';
import { Check as CheckIcon } from '@material-ui/icons';
import { TextFieldStyled, CloseIconStyled, ButtonStyled, } from 'components/Header/FilterMenus/SizeMenu/styled';
import { usePresenter } from 'components/Header/FilterMenus/SizeMenu/usePresenter';
import { FC } from 'react';
import { MenuItemProps } from 'types/index';

export const SizeMenu: FC<MenuItemProps> = ({ anchorElt, open, onClose }) => {
  const { handleChangeSize, handleChangeWidth, handleChangeHeight } = usePresenter();

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
      <MenuItem>
        <TextFieldStyled
          onChange={handleChangeWidth}
          label="мин. ширина"
          InputLabelProps={{
            shrink: true,
          }}
          type="number"
          variant="outlined"
          size="small"
        />
        <CloseIconStyled fontSize="small" />
        <TextFieldStyled
          onChange={handleChangeHeight}
          label="мин. высота"
          InputLabelProps={{
            shrink: true,
          }}
          type="number"
          variant="outlined"
          size="small"
        />
        <ButtonStyled variant="contained" startIcon={<CheckIcon />} onClick={handleChangeSize} />
      </MenuItem>
    </Menu>
  );
};
