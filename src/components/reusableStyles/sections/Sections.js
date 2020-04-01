// Emotion Styled Element
import styled from '@emotion/styled';

const Section = styled.div`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8rem 4rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    padding: 6rem 2rem;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileVS}) {
    padding: 5rem 2rem;
  }
`;

const SectionGrey = styled(Section)`
  background: ${props => props.theme.colors.lightgrey};
`;

const SectionPrimaryTransparent = styled(Section)`
  background: ${props => props.theme.colors.primaryTransparent};
`;

const TopSection = styled(Section)`
  padding-top: 2rem;
`;

const ProductPageTopSection = styled(Section)`
  background: ${props => props.theme.colors.primaryTransparent};
  padding: 2rem 6rem;
  @media (max-width: ${props => props.theme.screenSize.mobileVS}) {
    padding: 2rem 2rem;
  }

  & p {
    font-weight: bold;
  }
`;

const Container1200 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container1000 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Container800 = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContainerCenterFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SectionWhiteToGrey = styled(SectionGrey)`
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.white} 0%,
    rgba(248, 248, 248, 1) 40%,
    rgba(246, 246, 246, 1) 60%,
    ${props => props.theme.colors.lightgrey} 100%
  );
`;

const SectionGreyToWhite = styled(SectionGrey)`
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.lightgrey} 0%,
    rgba(246, 246, 246, 1) 47%,
    ${props => props.theme.colors.white} 100%
  );
`;

export {
  Section,
  SectionGrey,
  SectionWhiteToGrey,
  SectionGreyToWhite,
  SectionPrimaryTransparent,
  TopSection,
  ProductPageTopSection,
  Container1200,
  Container1000,
  Container800,
  ContainerCenterFlex,
};
