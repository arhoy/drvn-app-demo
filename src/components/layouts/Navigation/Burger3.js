/* eslint-disable */
import React, { useEffect } from 'react';

import styled from '@emotion/styled';

import { gsap } from 'gsap';

const SVG = styled.svg`
  & rect {
    fill: #fff;
  }
`;

export const BurgerSVG3 = ({ open }) => {
  // main mobile function, gets called on hover

  const menuTl = gsap.timeline({ paused: true });
  const menuTlClose = gsap.timeline({ paused: true });
  const menuBars = {};

  useEffect(() => {
    // run this on open
    menuTl
      .to(
        menuBars.topBar,
        0.2,
        {
          rotation: 45,
          transformOrigin: '50% 50%,',
          y: 30,
        },
        0.1,
      )
      .to(menuBars.middleBar, 0.2, { scaleX: 0 }, 0)
      .to(
        menuBars.bottomBar,
        0.2,
        {
          rotation: -45,
          transformOrigin: '50% 50%',
          y: -30,
        },
        0.2,
      );

    // run this on close
    menuTlClose
      .to(
        menuBars.topBar,
        0.2,
        {
          rotation: 0,
          transformOrigin: '50% 50%,',
          y: 0,
        },
        0.1,
      )
      .to(menuBars.middleBar, 0.2, { scaleX: 1 }, 0)
      .to(
        menuBars.bottomBar,
        0.2,
        {
          rotation: 0,
          transformOrigin: '50% 50%',
          y: 0,
        },
        0.2,
      );
  }, [open]);

  const runBurgerAnimation = () => {
    if (open === false) {
      menuTl.play();
    } else {
      menuTlClose.play();
    }
  };

  return (
    <>
      <SVG
        open={open}
        onClick={runBurgerAnimation}
        className="burgerSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect
          ref={e => (menuBars['topBar'] = e)}
          width="100"
          height="10"
        ></rect>
        <rect
          ref={e => (menuBars['middleBar'] = e)}
          y="30"
          width="100"
          height="10"
        ></rect>
        <rect
          ref={e => (menuBars['bottomBar'] = e)}
          y="60"
          width="100"
          height="10"
        ></rect>
      </SVG>
    </>
  );
};
