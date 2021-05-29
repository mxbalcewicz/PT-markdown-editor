import styled from 'styled-components';
import { StyledImageContainer } from 'components/Avatar/styled';

export const StyledContainer = styled.div`
  display: flex;
  margin-left: 8px;

  ${StyledImageContainer} {
    animation: appear;
    animation-duration: 0.2s;
    border: 2px solid #ffffff;
    padding: 0;
    margin-left: -8px;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
