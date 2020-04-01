import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 4rem;

  color: ${props => props.theme.colors.black};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 3.4rem;
  }
`;

const H2 = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.primaryDark};
`;

const H3 = styled.h3`
  display: inline-block;
  text-align: center;
  padding: 0;
  font-size: 3rem;
  background-image: linear-gradient(
    0deg,
    ${props => props.theme.colors.secondaryVeryLight} 50%,
    transparent 50%
  );
`;

const H4 = styled.h4`
  font-size: 2.2rem;
  font-weight: 400;
`;

const H5 = styled.h5`
  font-size: 2rem;
  font-weight: 400;
`;

const A = styled.a`
  color: ${props => props.theme.colors.black};
  text-decoration: none;
`;

const Li = styled.li`
  color: ${props => props.theme.colors.black};
  margin: 2rem 0;
`;

const Ul = styled.ul`
  margin: 1rem 0;
  margin-left: 2rem;
`;

const Bold = styled.span`
  font-weight: bolder;
`;

const Span = styled.span``;

const P = styled.p``;

export { H1, H2, H3, H4, H5, A, Li, Ul, Span, Bold, P };
