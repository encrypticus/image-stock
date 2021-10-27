import { MenuItem, FormControlLabel } from '@material-ui/core';
import { ColorMenu } from 'components/Header/FilterMenus/ColorMenu';
import { ImageTypeMenu } from 'components/Header/FilterMenus/ImageTypeMenu';
import { LangMenu } from 'components/Header/FilterMenus/LangMenu';
import { MenuStyled, GreenCheckBoxMainStyled } from 'components/Header/FilterMenus/MainMenu/styled';
import { usePresenter } from 'components/Header/FilterMenus/MainMenu/usePresenter';
import { MediaTypeMenu } from 'components/Header/FilterMenus/MediaTypeMenu';
import { OrientMenu } from 'components/Header/FilterMenus/OrientMenu';
import { SizeMenu } from 'components/Header/FilterMenus/SizeMenu';
import { SortMenu } from 'components/Header/FilterMenus/SortMenu';
import { VideoTypeMenu } from 'components/Header/FilterMenus/VideoTypeMenu';
import { ResetFilter } from 'components/Header/ResetFilter';
import { FC } from 'react';
import { MenuItemProps } from 'types/index';

export const MainMenu: FC<MenuItemProps> = ({ anchorElt, open, onClose }) => {
  const presenter = usePresenter();

  const renderLangMenu = () => (
    <LangMenu
      anchorElt={presenter.langAnchorElt}
      open={presenter.isLangMenuOpen}
      onClose={presenter.handleLangMenuClose}
    />
  );

  const renderImageTypeMenu = () => (
    <ImageTypeMenu
      anchorElt={presenter.imageTypeAnchorElt}
      open={presenter.isImageTypeMenuOpen}
      onClose={presenter.handleImageTypeMenuClose}
    />
  );

  const renderVideoTypeMenu = () => (
    <VideoTypeMenu
      anchorElt={presenter.videoTypeAnchorElt}
      open={presenter.isVideoTypeMenuOpen}
      onClose={presenter.handleVideoTypeMenuClose}
    />
  );

  const renderSizeMenu = () => (
    <SizeMenu
      anchorElt={presenter.sizeAnchorElt}
      open={presenter.isSizeMenuOpen}
      onClose={presenter.handleSizeMenuClose}
    />
  );

  const renderColorMenu = () => (
    <ColorMenu
      anchorElt={presenter.colorAnchorElt}
      open={presenter.isColorMenuOpen}
      onClose={presenter.handleColorMenuClose}
    />
  );

  const renderOrientMenu = () => (
    <OrientMenu
      anchorElt={presenter.orientAnchorElt}
      open={presenter.isOrientMenuOpen}
      onClose={presenter.handleOrientMenuClose}
    />
  );

  const renderSortMenu = () => (
    <SortMenu
      anchorElt={presenter.sortAnchorElt}
      open={presenter.isSortMenuOpen}
      onClose={presenter.handleSortMenuClose}
    />
  );

  return (
    <MenuStyled
      anchorEl={anchorElt}
      open={open}
      onClose={onClose}
      keepMounted
      getContentAnchorEl={null}
    >
      <MenuItem>
        <MediaTypeMenu />
      </MenuItem>

      <MenuItem onClick={presenter.handleLangMenuOpen}>Язык поиска</MenuItem>
      {renderLangMenu()}

      {presenter.mediaType === 'image' ? (
        <MenuItem onClick={presenter.handleImageTypeMenuOpen}>Тип изображения</MenuItem>
      ) : (
        <MenuItem onClick={presenter.handleVideoTypeMenuOpen}>Тип видео</MenuItem>
      )}
      {renderImageTypeMenu()}
      {renderVideoTypeMenu()}

      <MenuItem onClick={presenter.handleSizeMenuOpen}>Размер</MenuItem>
      {renderSizeMenu()}

      {presenter.mediaType === 'image' && (
        <MenuItem onClick={presenter.handleColorMenuOpen}>Цвет</MenuItem>
      )}
      {renderColorMenu()}

      {presenter.mediaType === 'image' && (
        <MenuItem onClick={presenter.handleOrientMenuOpen}>Ориентация</MenuItem>
      )}
      {renderOrientMenu()}

      <MenuItem onClick={presenter.handleSortMenuOpen}>Сортировать по</MenuItem>
      {renderSortMenu()}

      <MenuItem>
        <FormControlLabel
          control={
            <GreenCheckBoxMainStyled
              checked={presenter.safesearch}
              onChange={presenter.handleSafeSearchChange}
            />
          }
          label="Безопасный поиск"
        />
      </MenuItem>

      <MenuItem>
        <FormControlLabel
          control={
            <GreenCheckBoxMainStyled
              checked={presenter.editors_choice}
              onChange={presenter.handleEditorsChoice}
            />
          }
          label="Выбор редакции"
        />
      </MenuItem>

      <MenuItem>
        <ResetFilter />
      </MenuItem>
    </MenuStyled>
  );
};
