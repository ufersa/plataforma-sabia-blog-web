import Head from 'next/head';

type SEOProps = {
  seo: {
    metaTitle: string;
    metaDescription?: string;
    shareImage?: string;
    article: boolean;
  };
};

const SEO = ({ seo }: SEOProps) => {
  return (
    <Head>
      {seo.metaTitle && (
        <>
          <title>{seo.metaTitle}</title>
          <meta property="og:title" content={seo.metaTitle} />
          <meta name="twitter:title" content={seo.metaTitle} />
        </>
      )}

      {seo.metaDescription && (
        <>
          <meta name="description" content={seo.metaDescription} />
          <meta property="og:description" content={seo.metaDescription} />
          <meta name="twitter:description" content={seo.metaDescription} />
        </>
      )}

      {seo.shareImage && (
        <>
          <meta property="og:image" content={seo.shareImage} />
          <meta name="twitter:image" content={seo.shareImage} />
          <meta name="image" content={seo.shareImage} />
        </>
      )}

      {seo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
