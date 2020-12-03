import {
  FacebookF,
  Twitter,
  Instagram,
  PinterestP,
} from '@styled-icons/fa-brands';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.SocialMedia>
        <S.SocialMediaLink>
          <FacebookF />
        </S.SocialMediaLink>
        <S.SocialMediaLink>
          <Twitter />
        </S.SocialMediaLink>
        <S.SocialMediaLink>
          <Instagram />
        </S.SocialMediaLink>
        <S.SocialMediaLink>
          <PinterestP />
        </S.SocialMediaLink>
      </S.SocialMedia>
      <S.Content>
        <S.ImageWrapper>
          <img
            src="/img/logo-blog.svg"
            alt="Logomarca do blog da plataforma sabiá"
          />
        </S.ImageWrapper>

        <S.SiteInfosSection>
          <h4>Plataforma</h4>
          <a>O que é?</a>
          <a>Quem somos</a>
          <a>Parcerias</a>
        </S.SiteInfosSection>
        <S.SiteInfosSection>
          <h4>Funcionalidades</h4>
          <a>Para Inventores</a>
          <a>Para a Sociedade</a>
          <a>Para Financiadores</a>
        </S.SiteInfosSection>
        <S.SiteInfosSection>
          <h4>Recursos</h4>
          <a>Cursos</a>
          <a>Fórum</a>
          <a>Ajuda</a>
        </S.SiteInfosSection>
        <S.SiteInfosSection>
          <h4>Contato</h4>
          <a>Fale conosco</a>
        </S.SiteInfosSection>
      </S.Content>
    </S.Wrapper>
  );
};

export default Footer;
