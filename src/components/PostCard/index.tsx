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
        <S.PostLink>
          <S.ImageWrapper>
            <Image
              src={thumbnail?.url || placeholder}
              alt="Capa do artigo"
              layout="responsive"
              width={560}
              height={380}
              objectFit="cover"
            />
          </S.ImageWrapper>

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
        </S.PostLink>
      </Link>
    </S.Wrapper>
  );
};

export default PostCard;
