import styled, { css } from 'styled-components';
import {
  Category as CardCategory,
  CategoryLabel as CardCategoryLabel,
} from 'components/PostCard/styles';

export const Wrapper = styled.article`
  padding: 4.8rem 2rem;
  word-break: break-word;
`;

export const Title = styled.h1`
  font-size: 4.6rem;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  ${({ theme: { colors } }) => css`
    margin-top: 2.4rem;
    margin-bottom: 1.6rem;
    color: ${colors.lightGray2};
    font-size: 2rem;
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

export const Category = styled(CardCategory)``;

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

export const Thumbnail = styled.div`
  ${({ theme: { colors } }) => css`
    margin: 0 auto 1rem;
    background: ${colors.lightGray4} no-repeat center center;
    background-size: cover;
    max-width: 80rem;
  `}
`;

export const Content = styled.div`
  ${({ theme: { colors } }) => css`
    font-size: 2rem;
    line-height: 1.32;
    color: ${colors.black};
    margin-top: 5.2rem;

    p {
      font-size: 1.5rem;
      line-height: 1.5;
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
  `}
`;
