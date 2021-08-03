import React, { FC, useEffect, useRef } from 'react';

import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { navMenuData } from 'constants/nav-menu-data';
import { changeOptions, clearMediaData } from 'redux/reducers/media-data-reducer';
import { getQueryString } from 'utils/query-string';
import classes from './style.module.scss';
import { useStyles } from './styles';

export const Categories: FC = () => {
  const wrapperRef = useRef<null | HTMLDivElement>(null);
  const listRef = useRef<null | HTMLUListElement>(null);
  const dispatch = useDispatch();
  const {
    mediaDataReducer: { options, mediaType },
  } = useSelector((state: any) => state); // todo any type
  const router = useRouter();

  useEffect(() => {
    let pointX = 0;
    let isMouseDown = false;

    const listWrapper = wrapperRef.current;
    const list = listRef.current;

    list && (list.style.marginLeft = '0px');

    const rightBorderDetected = () => {
      if (list && listWrapper) {
        return list.getBoundingClientRect().right <= listWrapper.getBoundingClientRect().right;
      }
      return false;
    };

    const leftBorderDetected = () => {
      if (list) {
        return parseInt(list.style.marginLeft, 10) >= 0;
      }
      return false;
    };

    const swipeLeft = (x1: Number, x2: Number) => x1 > x2;

    const swipeRight = (x1: Number, x2: Number) => x1 < x2;

    const getDiffBetweenWrapperAndList = () => {
      if (list && listWrapper) {
        return listWrapper.getBoundingClientRect().width - list.getBoundingClientRect().width;
      }
      return 0;
    };

    const bordersDetected = (event: MouseEvent | Touch, margin: Number, pointX: Number) => {
      if (leftBorderDetected() && swipeRight(pointX, event.clientX)) {
        list && (list.style.marginLeft = '0px');
        return true;
      }

      if (rightBorderDetected() && swipeLeft(pointX, event.clientX)) {
        list && (list.style.marginLeft = `${getDiffBetweenWrapperAndList()}px`);
        return true;
      }
      list && (list.style.marginLeft = `${margin}px`);

      return false;
    };

    const adjustList = () => {
      if (rightBorderDetected()) {
        list && (list.style.marginLeft = `${getDiffBetweenWrapperAndList()}px`);
      }
    };

    const toggleListMask = () => {
      if (listWrapper) {
        if (rightBorderDetected()) {
          return listWrapper.classList.remove('style_masked__GHKHj');
        } else {
          return listWrapper.classList.add('style_masked__GHKHj');
        }
      }
    };

    const mouseDown = (event: MouseEvent | TouchEvent) => {
      isMouseDown = true;
      if (event instanceof TouchEvent) pointX = event.touches[0].clientX;
      else pointX = event.clientX;
    };

    const mouseUp = () => {
      adjustList();
      isMouseDown = false;
    };

    const mouseMove = (event: MouseEvent | TouchEvent) => {
      const currentEvent = event instanceof TouchEvent ? event.touches[0] : event;

      if (isMouseDown) {
        const value = pointX - currentEvent.clientX;
        const margin = list ? parseInt(list.style.marginLeft, 10) - value : 0;
        toggleListMask();

        if (bordersDetected(currentEvent, margin, pointX)) return;

        pointX = currentEvent.clientX;
      }
    };

    listWrapper && listWrapper.addEventListener('mousedown', mouseDown);

    listWrapper && listWrapper.addEventListener('touchstart', mouseDown);

    listWrapper && listWrapper.addEventListener('mouseup', mouseUp);

    listWrapper && listWrapper.addEventListener('touchend', mouseUp);

    listWrapper && listWrapper.addEventListener('mousemove', mouseMove, false);

    listWrapper && listWrapper.addEventListener('touchmove', mouseMove, false);

    list && list.addEventListener('mouseleave', mouseUp);

    window.addEventListener('resize', adjustList, false);
  }, []);

  const styles = useStyles();

  const selectCategory = (category: String) => {
    dispatch(clearMediaData());
    dispatch(changeOptions({ category: category.toLowerCase() }));

    const settings = {
      options: { ...options, category: category.toLowerCase() },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  return (
    <Box className={`${styles.wrapper} ${classes.masked}`} {...{ ref: wrapperRef }}>
      <List className={styles.root} ref={listRef}>
        {navMenuData.map((item, index) => (
          <ListItem classes={{ root: styles.item }} button key={index}>
            <ListItemText
              primary={item}
              key={index}
              classes={{ primary: styles.label }}
              onClick={() => selectCategory(item)}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
