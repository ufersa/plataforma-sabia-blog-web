import {
  FacebookF,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from '@styled-icons/fa-brands';
import Link from 'next/link';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.FooterHeader>
        <S.FooterText>Siga o sabiá por onde ele for!</S.FooterText>
        <S.SocialMedia>
          <S.SocialMediaLink
            href="https://www.facebook.com/plataformadigitalsabia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookF />
          </S.SocialMediaLink>
          <S.SocialMediaLink
            href="https://twitter.com/plataformasabia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </S.SocialMediaLink>
          <S.SocialMediaLink
            href="https://www.instagram.com/plataformasabia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </S.SocialMediaLink>
          <S.SocialMediaLink
            href="https://www.linkedin.com/in/plataformasabia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </S.SocialMediaLink>
          <S.SocialMediaLink
            href="https://www.youtube.com/channel/UCZVZ7yxCvjJIihaDz6WytpA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
          </S.SocialMediaLink>
        </S.SocialMedia>
      </S.FooterHeader>
      <S.Content>
        <S.ImageWrapper>
          <a
            href="https://plataformasabia.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/img/logo-plataforma-white.svg"
              alt="Logomarca da Plataforma Sabiá"
            />
          </a>
        </S.ImageWrapper>

        <S.SiteInfosSection>
          <h4>Plataforma</h4>
          <a
            href="http://plataformasabia.com/about#intro"
            target="_blank"
            rel="noopener noreferrer"
          >
            O que é?
          </a>
          <a
            href="http://plataformasabia.com/about#about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quem somos
          </a>
        </S.SiteInfosSection>
        <S.SiteInfosSection>
          <h4>Funcionalidades</h4>
          <a
            href="http://plataformasabia.com/about#features"
            target="_blank"
            rel="noopener noreferrer"
          >
            Para Inventores
          </a>
          <a
            href="http://plataformasabia.com/about#features"
            target="_blank"
            rel="noopener noreferrer"
          >
            Para a Sociedade
          </a>
          <a
            href="http://plataformasabia.com/about#features"
            target="_blank"
            rel="noopener noreferrer"
          >
            Para Financiadores
          </a>
        </S.SiteInfosSection>
        <S.SiteInfosSection>
          <h4>Recursos</h4>
          <a
            href="https://cursos.plataformasabia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cursos
          </a>
          <Link href="/">
            <a>Blog</a>
          </Link>
          <a
            href="http://plataformasabia.com/ideias"
            target="_blank"
            rel="noopener noreferrer"
          >
            Banco de Ideias
          </a>
          <a
            href="http://plataformasabia.com/editais"
            target="_blank"
            rel="noopener noreferrer"
          >
            Banco de Editais
          </a>
          <a
            href="http://plataformasabia.com/vitrines"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vitrines tecnológicas
          </a>
        </S.SiteInfosSection>
        <S.SiteInfosSection>
          <h4>Contato</h4>
          <a
            href="http://plataformasabia.com/about#contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco
          </a>
        </S.SiteInfosSection>
      </S.Content>
      <S.SiteSocket>
        <S.SiteSocketContainer>
          <div>
            <span>Orgulhosamente</span> desenvolvido pela equipe da
            <span> Plataforma Sabiá</span> na{' '}
            <span>UNIVERSIDADE FEDERAL RURAL DO SEMI-ÁRIDO - UFERSA</span>.
          </div>
          <S.SiteSocketList>
            <S.SiteSocketListItem>
              <a
                href="http://plataformasabia.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade
              </a>
            </S.SiteSocketListItem>
            <S.SiteSocketListItem>
              <Link href="/terms-of-use">
                <a
                  href="http://plataformasabia.com/terms-of-use"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Termos e Condições
                </a>
              </Link>
            </S.SiteSocketListItem>
            <S.SiteSocketListItem>
              <a
                href="http://plataformasabia.com/about#contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacte-nos
              </a>
            </S.SiteSocketListItem>
          </S.SiteSocketList>
        </S.SiteSocketContainer>
      </S.SiteSocket>
    </S.Wrapper>
  );
};

export default Footer;
