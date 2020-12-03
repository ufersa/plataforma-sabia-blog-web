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
  font-size: 5.4rem;
  font-weight: 800;
`;

export const Subtitle = styled.p`
  ${({ theme: { colors } }) => css`
    margin-top: 2.4rem;
    padding-bottom: 2.4rem;
    border-bottom: 1px solid ${colors.border};
    color: ${colors.lightGray2};
    font-size: 2.4rem;
  `}
`;

export const PublishDate = styled.p`
  margin-top: 1rem;
  margin-bottom: 2.4rem;
  font-size: 1.2rem;
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
    margin: 0 -6vw;
    background: ${colors.lightGray4} no-repeat center center;
    background-size: cover;
  `}
`;

export const Content = styled.div`
  ${({ theme: { colors } }) => css`
    font-size: 2rem;
    line-height: 1.32;
    color: ${colors.black};
    margin-top: 5.2rem;

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
