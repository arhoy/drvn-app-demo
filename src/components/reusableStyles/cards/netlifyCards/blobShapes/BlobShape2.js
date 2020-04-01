import React, { useEffect } from 'react';

import styled from '@emotion/styled';

import { gsap } from 'gsap';

const SVG = styled.svg`


   z-index:-1;
   width: 22rem;
   object-fit:cover;
   fill: #ffb4bc;

  position: absolute;

  & path {
    opacity:1;
  }



  color: ${props => props.theme.colors.white};
  }
`;

const Blob2 = () => {
  useEffect(() => {
    const master = new gsap.timeline({});

    function blob2() {
      const tl = new gsap.timeline({ yoyo: true, repeat: -1 });
      tl.to('.blob2', 10, {
        opacity: 0.5,
        ease: 'linear',
        scale: 1.15,
        transformOrigin: '50% 50%',
      });
      return tl;
    }

    // add timeline functions
    master.add(blob2());
  }, []);

  return (
    <SVG
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400.94 400.87"
    >
      <path
        className="blob2"
        d="M369.94,14.65c20.8,25.6-4.7,92.8-11.8,152.9s4.3,113.2-16.5,145.3-73.9,43.5-130.4,47-116.7-.7-154.4-32.8S3.94,234.75.64,171.35s5.4-130.1,43-155.8S148,5.25,214.94,5.05,349.14-11,369.94,14.65Z"
        transform="translate(0 20)"
      />
    </SVG>
  );
};

export default Blob2;
