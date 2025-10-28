import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { Instagram, Mail, Phone, Sparkles } from "lucide-react";
import { Container } from "./Container";
import Link from "next/link";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const locale = await getLocale();
  return (
    <footer className="border-t bg-secondary/30 mt-20">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-semibold">
                Invitly
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              {t("description")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("navigation")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/templates`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("invitations")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("contactTitle")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hola@Invitly.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @Invitly
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t text-center text-sm text-muted-foreground">
          <p>{t("copyright")}</p>
        </div>
      </Container>
    </footer>
  );
}
