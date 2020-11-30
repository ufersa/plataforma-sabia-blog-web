import { Container } from 'components/Container';
import Header from 'components/Header';

import * as S from './styles';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <Container>
      <Header />
    </Container>

    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default Layout;
