import Link from 'next/link';
import Image from 'next/image';
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
        <S.ImageWrapper>
          <Image
            src={thumbnail?.url || placeholder}
            alt="Capa do artigo"
            layout="responsive"
            width={1024}
            height={768}
            objectFit="cover"
            objectPosition="center center"
          />
        </S.ImageWrapper>
      </Link>

      <S.Details>
        <S.Category>
          {categories.length ? (
            categories.map((category) => (
              <S.CategoryLabel key={category.id}>
                {category.name}
              </S.CategoryLabel>
            ))
          ) : (
            <S.CategoryLabel>Sem categoria</S.CategoryLabel>
          )}
        </S.Category>
        <Link href={`/${slug}`}>
          <a>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>

            <S.DateWrapper>
              {new Date(published_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </S.DateWrapper>
          </a>
        </Link>
      </S.Details>
    </S.Wrapper>
  );
};

export default PostCard;
