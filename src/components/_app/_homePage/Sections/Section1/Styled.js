import styled from '@emotion/styled';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  width: 8rem;
  padding: 3px 6px;
  font-size: 1.4rem;
  border-radius: 4px;
  margin-right: 4px;

  &:hover {
    color: ${props => props.theme.colors.red};
    border: 1px solid ${props => props.theme.colors.red};
  }
`;
