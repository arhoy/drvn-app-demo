import styled from '@emotion/styled';

const TagContainer = styled.div`
  margin-top: 4px;
`;

const Tag = styled.span`
  display: inline-block;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  font-size: 1.3rem;
  background: ${props => props.theme.colors.primaryLight};
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  border-radius: 4px;
  color: ${props => props.theme.colors.lightgrey};
`;

export { TagContainer, Tag };
