import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Pages = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 1.4rem;
    color: ${colors.black};
    margin: 0 1.2rem;
  `}
`;

export const NavigationButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  ${({ theme: { colors } }) => css`
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0.2rem 0.8rem;
    transition: color 0.2s;

    font-size: 1.6rem;
    color: ${colors.black};

    :hover:not(:disabled) {
      color: ${colors.darkGreen};
    }

    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :focus {
      box-shadow: 0px 0px 4px 2px ${colors.primary};
    }
  `}
`;
