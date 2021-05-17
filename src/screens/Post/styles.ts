import styled, { css } from 'styled-components';
import {
  Category as CardCategory,
  CategoryLabel as CardCategoryLabel,
} from 'components/PostCard/styles';
import media from 'styled-media-query';

export const Wrapper = styled.article`
  padding: 4.8rem 2rem;
  word-break: break-word;
`;

export const Title = styled.h1`
  font-size: 4.2rem;
  font-weight: 700;

  ${media.lessThan('medium')`
    font-size: 3.2rem;
  `}
`;

export const Subtitle = styled.p`
  ${({ theme: { colors } }) => css`
    margin-top: 2.4rem;
    margin-bottom: 1.6rem;
    color: ${colors.lightGray2};
    font-size: 2rem;

    ${media.lessThan('medium')`
      font-size: 1.6rem;
    `}
  `}
`;

export const DateAndShare = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    border-top: 1px solid ${colors.border};
    padding-top: 1.6rem;
    margin-top: 1rem;
    margin-bottom: 2.4rem;

    > p {
      font-size: 1.2rem;
      margin-right: 1.2rem;
    }
  `}
`;

export const Category = styled(CardCategory)`
  a {
    font-size: 1rem;
  }
`;

export const CategoryLabel = styled(CardCategoryLabel)`
  ${({ theme: { colors } }) => css`
    :hover {
      color: ${colors.darkOrange};
      ::before {
        background: ${colors.darkOrange};
        opacity: 0.2;
      }
    }

    :focus {
      ::before {
        box-shadow: 0px 0px 4px 2px ${colors.primary};
        opacity: 0.2;
      }
    }
  `}
`;

export const Thumbnail = styled.div``;

export const ImageBackground = styled.div`
  ${({ theme: { colors } }) => css`
    background: ${colors.lightGray4} no-repeat center center;
    background-size: cover;
  `}
`;

export const Content = styled.div`
  ${({ theme: { colors } }) => css`
    font-size: 2rem;
    line-height: 1.32;
    color: ${colors.black};
    margin: 5.2rem auto 0;
    max-width: 64.8rem;

    p {
      font-size: 2rem;
      line-height: 3.2rem;
      margin-bottom: 0.5rem;
    }

    img {
      width: 100%;
    }

    td {
      border: 1px solid ${colors.lightGray3};
    }

    a {
      color: ${colors.darkGreen};

      :hover {
        border-bottom: 1px solid ${colors.darkGreen};
      }

      :focus {
        box-shadow: 0px 0px 4px 2px ${colors.primary};
      }
    }

    figcaption {
      color: ${colors.silver};
      font-size: 1.4rem;
      font-style: italic;
    }

    ol,
    ul {
      margin-left: 2rem;
    }

    ul {
      list-style: disc;
    }

    blockquote {
      padding-left: 2rem;
      border-left: 0.8rem solid ${colors.lightGray3};
      margin: 1rem 0;

      p {
        font-style: italic;
      }
    }

    ${media.lessThan('medium')`
      p {
        font-size: 1.4rem;
      }
    `}
  `}
`;

export const PostHeader = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export const ThumbnailCaption = styled.p`
  ${({ theme: { colors } }) => css`
    font-size: 1.2rem;
    margin-top: 1.6rem;
    color: ${colors.lightGray};
  `}
`;
