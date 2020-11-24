import React, { useEffect, useRef } from 'react';
import { List, ListItem, ListItemText, Box } from '@material-ui/core';
import { useStyles } from './styles';
import { log } from '../../../utils/logger';

export const Categories = () => {
  const wrapperRef = useRef(null);
  const listRef = useRef(null);
  const data = [
    'Backgrounds',
    'Fashion',
    'Nature',
    'Science',
    'Education',
    'Feelings',
    'Health',
    'People',
    'Religion',
    'Places',
    'Animals',
    'Industry',
    'Computer',
    'Food',
    'Sports',
    'Transportation',
    'Travel',
    'Buildings',
    'Business',
    'Music'
  ];

  useEffect(() => {
    let pointX = 0;
    let isMouseDown = false;

    const listWrapper = wrapperRef.current;
    const list = listRef.current;

    list.style.marginLeft = '0px';

    const rightLimitReached = () => {
      return list.getBoundingClientRect().right <= listWrapper.getBoundingClientRect().right;
    };

    const leftLimitReached = () => {
      return parseInt(list.style.marginLeft) > 0;
    };

    const swipeLeft = (x1, x2) => {
      return x1 > x2;
    };

    listWrapper.addEventListener('mousedown', function (event) {
      isMouseDown = true;
      pointX = event.clientX;
    });

    listWrapper.addEventListener('mouseup', function () {
      isMouseDown = false;
    });

    listWrapper.addEventListener('mousemove', function (event) {
      if (isMouseDown) {
        let value = pointX - event.clientX;
        let margin = parseInt(list.style.marginLeft) - value;

        if (leftLimitReached()) list.style.marginLeft = 0;
        else {
          if (rightLimitReached() && swipeLeft(pointX, event.clientX)) {
            list.style.marginLeft = list.style.marginLeft;
            return;
          } else {
            list.style.marginLeft = `${margin}px`
          }
        }

        pointX = event.clientX;

        if (leftLimitReached()) list.style.marginLeft = 0;
        else {
          if (rightLimitReached() && swipeLeft(pointX, event.clientX)) {
            list.style.marginLeft = list.style.marginLeft;
            return;
          } else {
            list.style.marginLeft = `${margin}px`
          }
        }
      }
    }, false);

    list.addEventListener('mouseleave', function (event) {
      isMouseDown = false;
    })
  }, []);

  const styles = useStyles();

  return (
    <Box className={styles.wrapper} ref={wrapperRef}>
      <List className={styles.root} ref={listRef}>
        {
          data.map((item, index) => (
            <ListItem classes={{ root: styles.item }} button key={index}>
              <ListItemText primary={item} key={index}/>
            </ListItem>
          ))
        }
      </List>
    </Box>
  );
};
