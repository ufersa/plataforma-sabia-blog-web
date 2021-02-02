import styled, { css } from 'styled-components';
import {
  FacebookSquare,
  Twitter,
  Linkedin,
  Whatsapp,
} from '@styled-icons/fa-brands';
import { ContentCopy } from '@styled-icons/material-outlined';
// import { StyledInput } from '../../Form/styles';

const defaultIconProps = ({ theme: { sizes } }) => ({
  size: sizes.largeIcon * 10,
});

export const Container = styled.div`
  ${({ theme: { screens } }) => css`
    width: 50rem;
    padding: 2rem;

    h3 {
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 2.8rem;
      text-align: center;
    }

    @media (max-width: ${screens.medium}px) {
      width: 100%;
    }
  `}
`;

export const IconsWrapper = styled.div`
  ${({ theme: { screens } }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 2rem 0;

    @media (max-width: ${screens.small}px) {
      flex-direction: column;
    }

    button {
      margin: 1rem;
      padding: 1rem;

      @media (max-width: ${screens.small}px) {
        width: 100%;
      }
    }
  `}
`;

export const LocationInput = styled.input.attrs(() => ({
  readOnly: true,
  type: 'text',
}))`
  ${({ theme: { colors, metrics } }) => css`
    border: none;
    border-radius: ${metrics.baseRadius}rem;
    background: ${colors.lightGray4};
    color: ${colors.silver};
    font-size: 1.6rem;
    width: 100%;
    text-align: center;
    padding: 0.8rem;
  `}
`;

export const Button = styled.button`
  ${({ theme: { colors, metrics } }) => css`
    border: none;
    border-radius: ${metrics.baseRadius}rem;
    background: ${colors.primary};

    > svg {
      color: ${colors.white};
    }
  `}
`;

export const CopiedText = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.secondary};
    font-weight: 500;
    font-size: 1.4rem;
    text-align: center;
    margin-top: 0.8rem;
  `}
`;

export const FacebookIcon = styled(FacebookSquare).attrs(defaultIconProps)``;

export const TwitterIcon = styled(Twitter).attrs(defaultIconProps)``;

export const WhatsAppIcon = styled(Whatsapp).attrs(defaultIconProps)``;

export const LinkedinIcon = styled(Linkedin).attrs(defaultIconProps)``;

export const CopyIcon = styled(ContentCopy).attrs(defaultIconProps)``;
