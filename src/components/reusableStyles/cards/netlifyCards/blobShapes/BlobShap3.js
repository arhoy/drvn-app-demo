import React, { useEffect } from 'react';

import styled from '@emotion/styled';

import { gsap } from 'gsap';

const SVG = styled.svg`


   z-index:-1;
   width: 22rem;
   object-fit:cover;
  fill: #ffb4bc;
  transform:rotateZ(45deg);

  position: absolute;
  transform-origin:50% 50%;
  & path {
    opacity:1;

  }



  color: ${props => props.theme.colors.white};
  }
`;

const Blob3 = () => {
  useEffect(() => {
    const master = new gsap.timeline({});

    function blob3() {
      const tl = new gsap.timeline({ yoyo: true, repeat: -1 });
      tl.from('.blob3', 5, {
        opacity: 0.6,
        ease: 'linear',
        scale: 0.9,
        transformOrigin: '50% 50%',
      });
      return tl;
    }

    // add timeline functions
    master.add(blob3());
  }, []);

  return (
    <SVG
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 432.49 439.7"
    >
      <path
        d="M336.27,23.1c15.8,30.8-5,97.7,13.9,144.8s77.5,74.5,82,99.3-45,46.9-76.9,85.1S309,444.5,285,439.4s-57.4-69.4-88.6-98.4-59.8-22.7-93.2-29.9-71.7-27.6-90.1-59.9-16.9-76.1,1.2-111,52.9-60.9,89.3-82.3S178,19.7,223.07,8.7,320.47-7.7,336.27,23.1Z"
        transform="translate(0.04 -0.04)"
      />
    </SVG>
  );
};

export default Blob3;
