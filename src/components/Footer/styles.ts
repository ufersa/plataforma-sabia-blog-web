import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    background-color: ${colors.secondary};
  `}
`;

export const FooterHeader = styled.div`
  ${({ theme: { colors } }) => css`
    padding: 0 3rem;
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.lessThan('large')`
      padding: 0;
    `}
  `}
`;

export const FooterText = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 100%;

    ${media.lessThan('large')`
      display: none;
    `}
  `}
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;

  ${media.lessThan('large')`
    width: 100%;
  `}
`;

export const SocialMediaLink = styled.a`
  ${({ theme: { colors } }) => css`
    padding: 2.4rem 3.2rem;
    border-left: 1px solid ${colors.border};

    > svg {
      color: ${colors.white};
      width: 2.2rem;
      height: 2.2rem;
      transition: color 0.2s;
    }

    :hover {
      > svg {
        color: ${colors.secondary};
      }
    }

    ${media.lessThan('large')`
      flex-grow: 1;
      display: flex;
      justify-content: center;
      padding: 2.4rem 0;

      :first-child {
        border-left: none;
      }
    `}
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 3.2rem 4.8rem;
  word-break: break-word;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  max-width: 27rem;
  flex-shrink: 1;
  margin-right: 1.6rem;
  margin-bottom: 1.6rem;

  > a {
    display: flex;
    > img {
      width: 100%;
    }
  }
`;

export const SiteInfosSection = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    margin: 1.2rem 3.2rem;
    margin-right: auto;
    color: ${colors.white};
    font-weight: 500;
    line-height: 2.4rem;

    > h4 {
      font-size: 2.4rem;
    }

    > a {
      max-width: max-content;
      font-size: 1.6rem;
      margin-top: 0.8rem;

      :hover {
        color: ${colors.primary};
      }

      :focus {
        box-shadow: 0px 0px 4px 2px ${colors.primary};
      }
    }
  `}
`;

export const SiteSocket = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.secondary};
    background-color: ${colors.border};
    width: 100%;
    padding: 6rem 3rem;
    font-size: 1.4rem;
    letter-spacing: 0.07rem;

    ${media.lessThan('medium')`
      padding: 3rem;
    `}
  `}
`;

export const SiteSocketContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: ${({ theme }) => theme.metrics.containerWidth}rem;
  width: 100%;
  margin: 0 auto;

  > div {
    width: 50%;
  }

  span {
    font-weight: bold;
  }

  ${media.lessThan('large')`
    flex-direction: column;

    div {
      text-align: center;
      margin-bottom: 3rem;
      width: 100%;
    }
  `}
`;

export const SiteSocketList = styled.ul`
  display: flex;
  align-items: center;

  ${media.lessThan('large')`
    width: 100%;
    justify-content: space-around;
  `}

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const SiteSocketListItem = styled.li`
  margin-left: 1.5rem;

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};

    :hover {
      color: ${({ theme }) => theme.colors.darkGreen};
    }
  }

  ${media.lessThan('medium')`
    margin: 2rem 0;
  `}
`;
