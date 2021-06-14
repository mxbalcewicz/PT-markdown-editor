import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 8px;
  border: 1px solid #eaeaea;
  padding: 16px;
  margin-bottom: 16px;
  transition: border 0.2s;

  &:hover {
    border: 1px solid #2b56e8;
  }
`;

export const CardHeader = styled.h3`
  margin: 0 0 16px;
  padding: 0;
`;

export const CardLinkLabel = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
`;

export const CardLink = styled.a`
  background-color: #f8f8f8;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  padding: 8px;
  display: block;
  margin: 8px 0;
  overflow-x: auto;
  white-space: nowrap;
`;
