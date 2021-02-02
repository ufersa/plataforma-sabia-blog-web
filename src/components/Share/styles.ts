import styled, { css } from 'styled-components';

import { Share } from '@styled-icons/material-outlined';

export const Container = styled.button.attrs({ type: 'button' })`
  border: none;
  outline: none;
  background: none;

  transition: transform 1s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ShareIcon = styled(Share)`
  ${({ theme: { colors } }) => css`
    width: 2.4rem;

    color: ${colors.lightGray2};
  `}
`;
