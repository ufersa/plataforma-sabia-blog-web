import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const StyledHeader = styled.header`
  ${({ theme: { colors, screens } }) => css`
    display: flex;
    width: 100%;
    height: 6.5rem;
    position: sticky;
    top: 0;
    z-index: 1100;
    background-color: ${colors.white};
    box-shadow: 0 0.1rem 0.3rem ${colors.darkWhite};
    border-bottom: 0.1rem solid ${colors.border};

    @media (max-width: ${screens.medium}px) {
      height: 6rem;
    }
  `}
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  ${({ theme: { colors, screens } }) => css`
    border-right: 0.1rem solid ${colors.border};
    width: 100%;
    height: 100%;

    img {
      height: 100%;
      width: 100%;
    }

    @media (max-width: ${screens.medium}px) {
      border-right: none;
    }
  `}
`;

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('medium')`
		display: none;
  `}
`;

export const MenuLinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
`;

export const MenuLinksItem = styled.li`
  ${({ theme: { colors, screens } }) => css`
    font-size: 1.5rem;
    white-space: nowrap;

    a {
      font-weight: 500;
      padding: 0 3rem;
      text-transform: uppercase;
      color: ${colors.black};

      :hover {
        color: ${colors.darkGreen};
      }

      @media (max-width: ${screens.huge}px) {
        padding: 0 1rem;
      }
    }
  `}
`;
