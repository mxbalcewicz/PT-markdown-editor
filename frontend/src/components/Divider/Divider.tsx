import React from 'react';
import styled from 'styled-components';

const StyledHr = styled.hr`
  align-self: stretch;
  border-style: solid;
  border-width: 0 thin 0 0;
  border-color: ${({ theme }) => theme.colors.default};
  display: inline-flex;
  height: inherit;
  min-height: 100%;
  max-height: 100%;
  max-width: 0;
  width: 0;
  vertical-align: text-bottom;
  margin: 0 8px;
`;

const Divider: React.VFC = () => <StyledHr />;

export default Divider;
