import { Menu, Checkbox, FormControlLabel } from '@material-ui/core';
import {
  MenuItemStyled,
  CheckBoxWrapperStyled,
  CheckBoxBlockStyled,
  CheckBoxIconStyled,
} from 'components/Header/FilterMenus/ColorMenu/styled';
import { usePresenter } from 'components/Header/FilterMenus/ColorMenu/usePresenter';
import { GreenCheckboxStyled } from 'components/Header/FilterMenus/styled';
import { FC } from 'react';
import { Colors } from 'types/enums';
import { MenuItemProps } from 'types/index';

export const ColorMenu: FC<MenuItemProps> = ({ anchorElt, open, onClose }) => {
  const { colors, handleColorSelection } = usePresenter();
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
      <MenuItemStyled>
        <CheckBoxWrapperStyled>
          <FormControlLabel control={<GreenCheckboxStyled />} label="прозрачные" />
        </CheckBoxWrapperStyled>
        <CheckBoxWrapperStyled>
          <FormControlLabel control={<GreenCheckboxStyled />} label="чёрно-белые" />
        </CheckBoxWrapperStyled>
        <CheckBoxBlockStyled>
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.RED} />}
            checkedIcon={<CheckBoxIconStyled color={Colors.RED} checked />}
            name={Colors.RED}
            checked={colors.includes(Colors.RED)}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.ORANGE} />}
            checkedIcon={<CheckBoxIconStyled color={Colors.ORANGE} checked />}
            name={Colors.ORANGE}
            checked={colors.includes(Colors.ORANGE)}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.GREEN} />}
            checkedIcon={<CheckBoxIconStyled color={Colors.GREEN} checked />}
            name={Colors.GREEN}
            checked={colors.includes(Colors.GREEN)}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.YELLOW} />}
            checkedIcon={<CheckBoxIconStyled color={Colors.YELLOW} checked darkBorder />}
            name={Colors.YELLOW}
            checked={colors.includes(Colors.YELLOW)}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.TURQUOISE} />}
            checkedIcon={<CheckBoxIconStyled color={Colors.TURQUOISE} checked darkBorder />}
            name={Colors.TURQUOISE}
            checked={colors.includes(Colors.TURQUOISE)}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.BLUE} />}
            checkedIcon={<CheckBoxIconStyled color={Colors.BLUE} checked />}
            name={Colors.BLUE}
            checked={colors.includes(Colors.BLUE)}
            onChange={handleColorSelection}
          />
        </CheckBoxBlockStyled>
        <CheckBoxBlockStyled>
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.LILAC} />}
            checkedIcon={<CheckBoxIconStyled color={Colors.LILAC} checked darkBorder />}
            name={Colors.LILAC}
            checked={colors.includes(Colors.LILAC)}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.PINK} />}
            checkedIcon={<CheckBoxIconStyled color={Colors.PINK} checked darkBorder />}
            name={Colors.PINK}
            checked={colors.includes(Colors.PINK)}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.WHITE} checked />}
            checkedIcon={<CheckBoxIconStyled color={Colors.WHITE} checked darkBorder />}
            name={Colors.WHITE}
            checked={colors.includes(Colors.WHITE)}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.GRAY} />}
            checkedIcon={<CheckBoxIconStyled color={Colors.GRAY} checked />}
            name={Colors.GRAY}
            checked={colors.includes(Colors.GRAY)}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.BLACK} />}
            checkedIcon={<CheckBoxIconStyled color={Colors.BLACK} checked />}
            name={Colors.BLACK}
            checked={colors.includes(Colors.BLACK)}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<CheckBoxIconStyled color={Colors.BROWN} />}
            checkedIcon={<CheckBoxIconStyled color={Colors.BROWN} checked />}
            name={Colors.BROWN}
            checked={colors.includes(Colors.BROWN)}
            onChange={handleColorSelection}
          />
        </CheckBoxBlockStyled>
      </MenuItemStyled>
    </Menu>
  );
};
