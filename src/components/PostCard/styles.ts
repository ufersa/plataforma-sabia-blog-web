import { PostCardProps } from 'components/PostCard';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type WrapperProps = Pick<PostCardProps, 'large'>;

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme: { colors }, large }) => css`
    flex: 1 1 31rem;
    padding: 4.8rem 1.2rem;
    border-bottom: 1px solid ${colors.border};

    ${large &&
    css`
      ${media.greaterThan('medium')`
        flex: 1 1 100%;
        ${ImageWrapper} {
          max-width: 56rem;
          > div {
            max-height: 38rem;
          }
        }
        ${PostLink} {
          flex-direction: row;
        }
        ${Details} {
          margin-left: 1rem;
        }
      `}
    `}
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme: { metrics, colors } }) => css`
    width: 100%;
    margin-right: 2.4rem;
    background: ${colors.lightGray4} no-repeat center center;
    background-size: cover;
    border-radius: ${metrics.baseRadius}rem;
    overflow: hidden;
    flex-basis: 60%;

    > div {
      max-height: 24rem;
      height: 100%;
    }
  `}
`;

export const PostLink = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Details = styled.div`
  word-break: break-word;
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 40%;
`;

export const Category = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: 0.8rem;
`;

export const CategoryLabel = styled.span`
  ${({ theme: { colors, metrics } }) => css`
    margin-right: 1.2rem;
    position: relative;
    padding: 0.2rem 0.8rem;
    max-width: fit-content;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${colors.primary};

    ::before {
      content: '';
      position: absolute;
      display: block;
      opacity: 0.1;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: ${metrics.doubleRadius}rem;
      background: ${colors.primary};
    }
  `}
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 1.2rem;
`;

export const Subtitle = styled.p`
  ${({ theme: { colors } }) => css`
    font-size: 1.6rem;
    margin-bottom: 2.4rem;
    color: ${colors.lightGray};
  `}
`;

export const DateWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    font-size: 1.2rem;
    color: ${colors.lightGray};
  `}
`;
