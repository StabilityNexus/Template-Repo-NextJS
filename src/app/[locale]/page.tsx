import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Home" });

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t("heading"),
    "description": t("metaDescription"),
    "publisher": {
      "@type": "Organization",
      "name": "TODO:AOSSIE",
      "url": "https://TODO:project.aossie.org",
      "logo": "https://TODO:project.aossie.org/brand/icons/aossie_logo.svg",
    },
    "inLanguage": locale,
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background-primary text-foreground-primary font-sans transition-colors duration-200">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex w-full max-w-md flex-col items-center justify-center p-8 bg-background-secondary rounded-2xl border border-border-default shadow-card gap-6">

        <Image
          src="/brand/icons/aossie_logo.svg"
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
