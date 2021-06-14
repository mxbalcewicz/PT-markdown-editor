import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zindex.modal};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.modal.borderRadius};
  display: flex;
  flex-direction: column;
  padding: 32px;
`;
