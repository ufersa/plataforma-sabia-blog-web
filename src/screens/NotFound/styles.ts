import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5vw;

    > h1 {
      color: ${colors.secondary};
    }

    > p {
      margin-top: 0.8rem;
      font-size: 1.4rem;
      color: ${colors.lightGray};
    }

    > button {
      margin-top: 1.6rem;
    }
  `}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 36rem;
`;

export const Button = styled.button.attrs({ type: 'button' })`
  ${({ theme: { colors } }) => css`
    border: 0;

    color: ${colors.white};
    background: ${colors.secondary};
    padding: 0.4rem 0.8rem;

    font-size: 1.4rem;
    font-weight: 700;

    text-transform: uppercase;

    :hover {
      background: ${colors.darkGreen};
    }

    :focus {
      box-shadow: 0px 0px 4px 2px ${colors.primary};
    }
  `}
`;
