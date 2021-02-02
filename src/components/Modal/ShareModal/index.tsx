import React, { useCallback, useRef, useState } from 'react';
import {
  Container,
  IconsWrapper,
  CopyIcon,
  LocationInput,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsAppIcon,
  Button,
  CopiedText,
} from './styles';

const socialNetworks = {
  facebook: {
    url: 'https://facebook.com/sharer/sharer.php?u=:url',
    icon: FacebookIcon,
  },
  twitter: {
    url: `https://twitter.com/intent/tweet?url=:url`,
    icon: TwitterIcon,
  },
  linkedin: {
    url: 'https://www.linkedin.com/sharing/share-offsite/?url=:url',
    icon: LinkedinIcon,
  },
  whatsapp: {
    url: 'https://api.whatsapp.com/send?text=:url',
    icon: WhatsAppIcon,
  },
};

const ShareModal = () => {
  const pageUrlRef = useRef(null);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const handleSocialShare = useCallback((service) => {
    setCopiedToClipboard(false);
    const pageUrl = encodeURIComponent(pageUrlRef.current.value);
    const serviceUrl = socialNetworks[service].url.replace(':url', pageUrl);
    window.open(serviceUrl, '_blank', 'noopener');
  }, []);

  const handleCopyToClipboard = useCallback(() => {
    pageUrlRef.current.select();
    document.execCommand('copy');
    setCopiedToClipboard(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h3>Compartilhe esta publicação nas suas redes sociais</h3>

      <IconsWrapper>
        {Object.keys(socialNetworks).map((service) => {
          const SocialIcon = socialNetworks[service].icon;
          return (
            <Button
              aria-label={service}
              key={service}
              onClick={() => handleSocialShare(service)}
            >
              <SocialIcon />
            </Button>
          );
        })}

        <Button aria-label="Copy to clipboard" onClick={handleCopyToClipboard}>
          <CopyIcon />
        </Button>
      </IconsWrapper>

      <LocationInput value={window.location.href} ref={pageUrlRef} />
      {copiedToClipboard && (
        <CopiedText>Link copiado para a área de transferência</CopiedText>
      )}
    </Container>
  );
};

export default ShareModal;
