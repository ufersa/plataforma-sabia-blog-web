import { PostCardProps } from 'components/PostCard';
import styled from 'styled-components';

type WrapperProps = Pick<PostCardProps, 'large'>;

export const Wrapper = styled.article<WrapperProps>`
  display: flex;
  flex-wrap: wrap;

  > a {
    padding: 1rem;
    > img {
      width: 100%;
    }
  }
`;

export const Details = styled.div`
  word-break: break-word;
  margin-top: 1.6rem;
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
