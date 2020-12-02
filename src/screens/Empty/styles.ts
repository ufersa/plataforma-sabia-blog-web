import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5vw;

    p {
      color: ${colors.lightGray};
      font-size: 1.6rem;
    }
  `}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 36rem;
`;
