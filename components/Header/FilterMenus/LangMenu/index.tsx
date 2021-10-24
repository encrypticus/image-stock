import { Menu, Radio } from '@material-ui/core';
import { usePresenter } from 'components/Header/FilterMenus/LangMenu/usePresenter';
import { MenuItemStyled, LabelStyled } from 'components/Header/FilterMenus/styled';
import { FC } from 'react';
import { Lang } from 'types/enums';
import { MenuItemProps } from 'types/index';

export const LangMenu: FC<MenuItemProps> = ({ anchorElt, open, onClose }) => {
  const { lang, handleChange } = usePresenter();
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
          checked={lang === Lang.EN}
          value={Lang.EN}
          control={<Radio onChange={handleChange} />}
          label={Lang.EN}
          name="radio-button-lang"
        />
      </MenuItemStyled>

      <MenuItemStyled onClick={handleClose}>
        <LabelStyled
          checked={lang === Lang.RU}
          value={Lang.RU}
          control={<Radio onChange={handleChange} />}
          label={Lang.RU}
          name="radio-button-lang"
        />
      </MenuItemStyled>
    </Menu>
  );
};
