import * as S from './styles';
import Link from 'next/link';

const Header = () => {
  return (
    <S.StyledHeader>
      <S.Container>
        <S.LeftContent>
          <S.LogoContainer>
            <Link href="/" passHref>
              <a>
                <img src="/img/logo.svg" alt="Logomarca da plataforma Sabiá" />
              </a>
            </Link>
          </S.LogoContainer>
          <S.MenuLinksWrapper>
            <S.MenuLinksList>
              <S.MenuLinksItem>
                <Link href="/" passHref>
                  <a>Início</a>
                </Link>
              </S.MenuLinksItem>
            </S.MenuLinksList>
          </S.MenuLinksWrapper>
        </S.LeftContent>
      </S.Container>
    </S.StyledHeader>
  );
};

export default Header;
