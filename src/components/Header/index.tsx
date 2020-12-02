import Link from 'next/link';

import * as S from './styles';
import links from './links';
import HamburguerMenu from 'components/HamburguerMenu';

const Header = () => {
  return (
    <S.StyledHeader>
      <S.Container>
        <S.Box>
          <S.LogoContainer>
            <Link href="/" passHref>
              <a>
                <img src="/img/logo.svg" alt="Logomarca da plataforma Sabiá" />
              </a>
            </Link>
          </S.LogoContainer>
          <S.MenuLinksWrapper>
            <S.MenuLinksList>
              {links.map(({ id, label, href }) => (
                <S.MenuLinksItem key={id}>
                  <Link href={href} passHref>
                    <a>{label}</a>
                  </Link>
                </S.MenuLinksItem>
              ))}
            </S.MenuLinksList>
          </S.MenuLinksWrapper>
        </S.Box>
        <S.Box>
          <HamburguerMenu links={links} />
        </S.Box>
      </S.Container>
    </S.StyledHeader>
  );
};

export default Header;
