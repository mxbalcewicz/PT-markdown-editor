import styled, { css } from 'styled-components';
import { IRowProps } from './Row';
import { up } from 'styled-breakpoints';

const createRowCss = (
  alignContent?: string,
  align?: string,
  justify?: string,
) => {
  return css`
    align-content: ${alignContent};
    align-items: ${align};
    justify-content: ${justify};
  `;
};

export const StyledContainer = styled.div<IRowProps>`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;

  ${({ alignContent, align, justify }) =>
    createRowCss(alignContent, align, justify)}

  ${up('sm')} {
    ${({ alignContentSM, alignSM, justifySM }) =>
      createRowCss(alignContentSM, alignSM, justifySM)}
  }

  ${up('md')} {
    ${({ alignContentMD, alignMD, justifyMD }) =>
      createRowCss(alignContentMD, alignMD, justifyMD)}
  }

  ${up('lg')} {
    ${({ alignContentLG, alignLG, justifyLG }) =>
      createRowCss(alignContentLG, alignLG, justifyLG)}
  }

  ${up('xl')} {
    ${({ alignContentXL, alignXL, justifyXL }) =>
      createRowCss(alignContentXL, alignXL, justifyXL)}
  }

  ${up('xxl')} {
    ${({ alignContentXXL, alignXXL, justifyXXL }) =>
      createRowCss(alignContentXXL, alignXXL, justifyXXL)}
  }
`;
