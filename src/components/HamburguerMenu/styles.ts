import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type MenuProps = {
  open: boolean;
};

export const Container = styled.div`
  display: none;
  margin: 0 1.5rem;
  position: relative;
  width: 4rem;
  height: 4rem;

  ${media.lessThan('medium')`
    display: initial;
  `}
`;

export const Menu = styled.div<MenuProps>`
  ${({ open }) => css`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;

    ${open &&
    css`
      div:first-child {
        -webkit-transform: rotate(-45deg) translate(-0.9rem, 0.6rem);
        transform: rotate(-45deg) translate(-0.9rem, 0.6rem);
      }

      div:nth-child(2) {
        opacity: 0;
      }

      div:last-child {
        -webkit-transform: rotate(45deg) translate(-0.8rem, -0.8rem);
        transform: rotate(45deg) translate(-0.8rem, -0.8rem);
      }
    `}
  `}
`;

export const Bar = styled.div`
  ${({ theme: { colors } }) => css`
    width: 3.5rem;
    height: 0.5rem;
    background-color: ${colors.primary};
    margin: 0.6rem 0;
    transition: 0.4s;
  `}
`;

export const Nav = styled.nav<MenuProps>`
  ${({ theme: { colors }, open }) => css`
    background-color: ${colors.white};
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: scale(0);

    ${open &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
  `}
`;

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavListItem = styled.li`
  ${({ theme: { colors } }) => css`
    padding: 2.5rem 0;

    a {
      color: ${colors.black};
      font-size: 2rem;
      text-transform: uppercase;

      :hover {
        color: ${colors.darkGreen};
      }
    }
  `}
`;
