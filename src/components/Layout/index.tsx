import Header from 'components/Header';

import * as S from './styles';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <Header />

    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default Layout;
