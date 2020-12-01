import Header from 'components/Header';

import * as S from './styles';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <Header />
    {children}
  </S.Wrapper>
);

export default Layout;
