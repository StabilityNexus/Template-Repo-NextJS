"use client";

import Image from "next/image";
import Script from "next/script";
import { useTranslations } from "next-intl";
import { use } from "react";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import ThemeToggle from "../../components/ThemeToggle";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const t = useTranslations("Home");

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AOSSIE Webpage Starter",
    "description": "A multi-lingual starter template for AOSSIE organizations built with Next.js 16 and React 19.",
    "publisher": {
      "@type": "Organization",
      "name": "AOSSIE",
      "url": "https://aossie.org",
      "logo": "https://aossie.org/assets/icons/aossie_logo.svg",
    },
    "inLanguage": locale,
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background-primary text-foreground-primary font-sans transition-colors duration-200">
      {/* Schema.org JSON-LD Structured Data */}
      <Script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex w-full max-w-md flex-col items-center justify-center p-8 bg-background-secondary rounded-2xl border border-border-default shadow-card-shadow gap-6">
        <Image
          src="/assets/icons/aossie_logo.svg"
          alt="AOSSIE Logo"
          width={80}
          height={80}
          priority
          style={{ width: "auto", height: "auto" }}
        />

        <h1 className="text-2xl font-bold tracking-tight text-foreground-secondary text-center">
          {t("heading")}
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center border-t border-border-default pt-6">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </main>
    </div>
  );
}


