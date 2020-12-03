/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */

import React, { useEffect, useRef } from 'react';

import {
  List, ListItem, ListItemText, Box,
} from '@material-ui/core';

import { navMenuData } from '../../../constants/nav-menu-data';
import classes from './style.module.scss';
import { useStyles } from './styles';

export const Categories = () => {
  const wrapperRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    let pointX = 0;
    let isMouseDown = false;

    const listWrapper = wrapperRef.current;
    const list = listRef.current;

    list.style.marginLeft = '0px';

    const rightBorderDetected = () => list.getBoundingClientRect().right <= listWrapper.getBoundingClientRect().right;

    const leftBorderDetected = () => parseInt(list.style.marginLeft, 10) >= 0;

    const swipeLeft = (x1, x2) => x1 > x2;

    const swipeRight = (x1, x2) => x1 < x2;

    const getDiffBetweenWrapperAndList = () => listWrapper.getBoundingClientRect().width - list.getBoundingClientRect().width;

    const bordersDetected = (event, margin, pointX) => {
      if (leftBorderDetected() && swipeRight(pointX, event.clientX)) {
        list.style.marginLeft = 0;
        return true;
      }

      if (rightBorderDetected() && swipeLeft(pointX, event.clientX)) {
        list.style.marginLeft = `${getDiffBetweenWrapperAndList()}px`;
        return true;
      }
      list.style.marginLeft = `${margin}px`;

      return false;
    };

    const adjustList = () => {
      if (rightBorderDetected()) {
        list.style.marginLeft = `${getDiffBetweenWrapperAndList()}px`;
      }
    };

    const toggleListMask = () => {
      rightBorderDetected() ? listWrapper.classList.remove('style_masked__GHKHj') : listWrapper.classList.add('style_masked__GHKHj');
    };

    const mouseDown = (event) => {
      isMouseDown = true;
      if (event.type === 'touchstart') pointX = event.touches[0].clientX;
      else pointX = event.clientX;
    };

    const mouseUp = () => {
      adjustList();
      isMouseDown = false;
    };

    const mouseMove = (event) => {
      const currentEvent = event.type === 'touchmove' ? event.touches[0] : event;

      if (isMouseDown) {
        const value = pointX - currentEvent.clientX;
        const margin = parseInt(list.style.marginLeft, 10) - value;
        toggleListMask();

        if (bordersDetected(currentEvent, margin, pointX)) return;

        pointX = currentEvent.clientX;
      }
    };

    listWrapper.addEventListener('mousedown', mouseDown);

    listWrapper.addEventListener('touchstart', mouseDown);

    listWrapper.addEventListener('mouseup', mouseUp);

    listWrapper.addEventListener('touchend', mouseUp);

    listWrapper.addEventListener('mousemove', mouseMove, false);

    listWrapper.addEventListener('touchmove', mouseMove, false);

    list.addEventListener('mouseleave', mouseUp);

    window.addEventListener('resize', adjustList, false);
  }, []);

  const styles = useStyles();

  return (
    <Box className={`${styles.wrapper} ${classes.masked}`} ref={wrapperRef}>
      <List className={styles.root} ref={listRef}>
        {
          navMenuData.map((item, index) => (
            <ListItem classes={{ root: styles.item }} button key={index}>
              <ListItemText
                primary={item}
                key={index}
                classes={{ primary: styles.label }}
              />
            </ListItem>
          ))
        }
      </List>
    </Box>
  );
};
