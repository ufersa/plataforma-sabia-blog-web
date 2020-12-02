import { Post } from 'types/graphql-schema';
import { Container } from 'components/Container';
import PostCard from 'components/PostCard';
import * as S from './styles';
import Pagination from 'components/Pagination';

export type HomeScreenProps = {
  posts: Post[];
  postsCount: number;
  currentPage: number;
};

const Home = ({ posts, postsCount, currentPage }: HomeScreenProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          {posts.map((post, index) => (
            <PostCard key={post.id} {...post} large={index === 0} />
          ))}
        </S.Content>
        <Pagination postsCount={postsCount} currentPage={currentPage} />
      </Container>
    </S.Wrapper>
  );
};

export default Home;
