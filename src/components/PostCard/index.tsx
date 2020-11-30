import Link from 'next/link';
import { Post } from 'types/graphql-schema';
import * as S from './styles';

export type PostCardProps = {
  large?: boolean;
} & Post;

const placeholder =
  'https://rocketfinalchallenge.s3.amazonaws.com/card-image.jpg';

const PostCard = ({
  title,
  subtitle,
  thumbnail,
  categories,
  published_at,
  slug,
  large,
}: PostCardProps) => {
  return (
    <S.Wrapper large={large}>
      <Link href={`/${slug}`}>
        <a>
          <img src={thumbnail?.url || placeholder} alt="Capa do artigo" />

          <S.Details>
            <S.Category>
              {categories.map((category) => category.name).join(',')}
            </S.Category>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>

            <S.DateWrapper>
              {new Date(published_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </S.DateWrapper>
          </S.Details>
        </a>
      </Link>
    </S.Wrapper>
  );
};

export default PostCard;
