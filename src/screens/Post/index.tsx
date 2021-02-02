import { Container } from 'components/Container';
import SEO from 'components/Seo';
import Share from 'components/Share';
import Image from 'next/image';
import sanitizeHtml from 'sanitize-html';

import { Post as PostType } from 'types/graphql-schema';
import * as S from './styles';

export type PostScreenProps = {
  post: PostType;
};

const Post = ({ post }: PostScreenProps) => {
  const seo = {
    metaTitle: post.title,
    metaDescription: post.subtitle,
    shareImage: post.thumbnail?.url,
    article: true,
  };

  return (
    <>
      <SEO seo={seo} />
      <S.Wrapper>
        <Container>
          <div>
            <S.Category>
              {post.categories?.length ? (
                post.categories?.map((category) => (
                  <S.CategoryLabel key={category.id} as="a" href="#">
                    {category.name}
                  </S.CategoryLabel>
                ))
              ) : (
                <S.CategoryLabel as="a" href="#">
                  Sem categoria
                </S.CategoryLabel>
              )}
            </S.Category>
            <S.Title>{post.title}</S.Title>
            {!!post.subtitle && <S.Subtitle>{post.subtitle}</S.Subtitle>}

            <S.DateAndShare>
              <p>
                <strong>Publicado em: </strong>
                {new Date(post.published_at).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
              <Share />
            </S.DateAndShare>

            {!!post.thumbnail && (
              <S.Thumbnail>
                <Image
                  src={post.thumbnail.url}
                  alt={post.thumbnail.alternativeText}
                  layout="responsive"
                  width={1280}
                  height={720}
                />
              </S.Thumbnail>
            )}
          </div>
          <S.Content
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(post.content, {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                  'img',
                  'oembed',
                  'iframe',
                  'div',
                ]),
                allowedAttributes: {
                  ...sanitizeHtml.defaults.allowedAttributes,
                  oembed: ['url'],
                  iframe: ['src', 'style'],
                  div: ['style'],
                },
              }),
            }}
          />
        </Container>
      </S.Wrapper>
    </>
  );
};

export default Post;
