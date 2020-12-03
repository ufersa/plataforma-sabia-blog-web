import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    background-color: ${colors.secondary};
  `}
`;

export const SocialMedia = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    justify-content: flex-end;
    background-color: ${colors.primary};
  `}
`;

export const SocialMediaLink = styled.a`
  ${({ theme: { colors } }) => css`
    padding: 2.4rem 3.2rem;

    > svg {
      color: ${colors.white};
      width: 2.2rem;
      height: 2.2rem;
      transition: color 0.2s;
    }

    border-left: 1px solid ${colors.border};

    :hover {
      > svg {
        color: ${colors.secondary};
      }
    }

    ${media.lessThan('medium')`
      flex-grow: 1;
      display: flex;
      justify-content: center;

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
  padding: 0 4.8rem;
  word-break: break-word;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  max-width: 27rem;
  flex-shrink: 1;

  > img {
    width: 100%;
  }
`;

export const SiteInfosSection = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    margin: 3.2rem;
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
