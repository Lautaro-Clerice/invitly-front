import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";

export default function ContactTitle() {
  const t = useTranslations("Contact");

  return (
    <div className="text-center mb-12 flex flex-col justify-center items-center gap-8">
      <div className="w-28 h-28 inset-0 flex items-center justify-center rounded-full bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-lg mt-10">
        <Mail className="w-14 h-14 text-primary" strokeWidth={1.5} />
      </div>

      <h2
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        id="contact-title"
      >
        {t("title")}
      </h2>
      <p
        className="text-lg text-muted-foreground max-w-2xl mx-auto"
        id="contact-subtitle"
      >
        {t("subtitle")}
      </p>
    </div>
  );
}
