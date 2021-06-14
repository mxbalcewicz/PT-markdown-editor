import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  outline-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
