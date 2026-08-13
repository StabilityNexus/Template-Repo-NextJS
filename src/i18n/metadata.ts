import type { Metadata } from 'next';
import { messagesMap, defaultMessages, Messages } from './messages';

export async function generateLocaleMetadata(
  locale: string,
  namespace: 'Home' = 'Home'
): Promise<Metadata> {
  const messages = (messagesMap[locale] || defaultMessages) as Messages;
  const meta = messages[namespace] || defaultMessages.Home;

  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://TODO:project.aossie.org';
  const siteUrl = rawSiteUrl.replace(/\/$/, '');
  const localeUrl = `${siteUrl}/${locale}`;

  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    icons: {
      icon: '/brand/icons/favicon.ico',
    },
    alternates: {
      canonical: localeUrl,
      languages: {
        en: `${siteUrl}/en`,
        hi: `${siteUrl}/hi`,
      },
    },
    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      url: localeUrl,
      siteName: 'AOSSIE',
      images: [
        {
          url: `${siteUrl}/brand/icons/aossie_logo.svg`,
          width: 500,
          height: 500,
          alt: 'AOSSIE Logo',
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'hi_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: [`${siteUrl}/brand/icons/aossie_logo.svg`],
    },
  };
}

