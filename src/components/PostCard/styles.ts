import { PostCardProps } from 'components/PostCard';
import styled, { css } from 'styled-components';

type WrapperProps = Pick<PostCardProps, 'large'>;

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme: { colors }, large }) => css`
    flex: 1 1 30rem;
    padding: 4.8rem 1.2rem;
    border-bottom: 1px solid ${colors.border};

    ${large &&
    css`
      flex: 1 1 100%;
      ${ImageWrapper} {
        max-width: 56rem;
      }
      ${PostLink} {
        flex-direction: row;
      }
    `}
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme: { metrics } }) => css`
    width: 100%;
    max-width: 28rem;
    margin-right: 2.4rem;

    > div {
      border-radius: ${metrics.baseRadius}rem;
    }
  `}
`;

export const PostLink = styled.a`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;

export const Details = styled.div`
  word-break: break-word;
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Category = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  margin-bottom: 0.2rem;
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 1.2rem;
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
`;

export const DateWrapper = styled.div`
  font-size: 1.2rem;
`;
