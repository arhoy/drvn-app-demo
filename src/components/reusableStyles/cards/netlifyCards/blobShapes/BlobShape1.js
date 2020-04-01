import React, { useEffect } from 'react';

import styled from '@emotion/styled';

import { gsap } from 'gsap';

const SVG = styled.svg`


   z-index:-1;
   width: 22rem;
   object-fit:cover;
  fill: #ffb4bc;

  position: absolute;
  transform-origin:50% 50%;
  & path {
    opacity:1;

  }



  color: ${props => props.theme.colors.white};
  }
`;

const Blob1 = () => {
  useEffect(() => {
    const master = new gsap.timeline({});

    function blob1() {
      const tl = new gsap.timeline({ yoyo: true, repeat: -1 });
      tl.from('.blob1', 5, {
        opacity: 0.6,
        ease: 'linear',
        scale: 0.9,
        transformOrigin: '50% 50%',
      });
      return tl;
    }

    // add timeline functions
    master.add(blob1());
  }, []);

  return (
    <SVG
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 164.22 193.63"
    >
      <path
        className="blob1"
        d="M163.49,2c4.85,8.25-16.75,43.8-19.05,70.15s14.75,43.5,17.1,64.15-9.9,44.85-29.2,53.45-45.55,1.55-69.55-8.6S17,157.91,6.89,138.81s-8.45-44.15.55-63.2,25.35-32,41.35-38.3,31.65-5.75,55.1-15.1S158.64-6.24,163.49,2Z"
        transform="translate(0.02 0.01)"
      />
    </SVG>
  );
};

export default Blob1;
