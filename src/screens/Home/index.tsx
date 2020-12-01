import { Post } from 'types/graphql-schema';
import { Container } from 'components/Container';
import PostCard from 'components/PostCard';
import * as S from './styles';

export type HomeScreenProps = {
  posts: Post[];
};

const Home = ({ posts }: HomeScreenProps) => {
  return (
    <Container>
      <S.Content>
        {posts.map((post, index) => (
          <PostCard key={post.id} {...post} large={index === 0} />
        ))}
      </S.Content>
    </Container>
  );
};

export default Home;
