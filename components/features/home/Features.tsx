export const dynamic = "force-static";

import {
  Palette,
  Smartphone,
  Heart,
  Users,
  Calendar,
  Camera,
  Music,
  Gift,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { getTranslations } from "next-intl/server";

const featureStyles: Array<{ icon: LucideIcon; gradient: string }> = [
  { icon: Palette, gradient: "from-pink-500 to-purple-600" },
  { icon: Smartphone, gradient: "from-blue-500 to-cyan-600" },
  { icon: Users, gradient: "from-green-500 to-emerald-600" },
  { icon: Calendar, gradient: "from-orange-500 to-red-600" },
  { icon: Camera, gradient: "from-purple-500 to-indigo-600" },
  { icon: Music, gradient: "from-teal-500 to-blue-600" },
];

const defaultFeatureStyle = {
  icon: Gift,
  gradient: "from-gray-500 to-slate-600",
};

export default async function Features() {
  const t = await getTranslations("Features");

  const features = t.raw("features") as Array<{
    title: string;
    description: string;
  }>;
  const benefits = t.raw("benefits") as string[];

  return (
    <section
      className="relative py-24 bg-linear-to-b from-secondary to-background overflow-hidden"
      role="main"
      aria-label={t("title") + " " + t("description")}
    >
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Gift className="h-4 w-4" aria-hidden="true" />
            <span>{t("badge")}</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t("title")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const style = featureStyles[index] || defaultFeatureStyle;
            const Icon = style.icon;
            const gradient = style.gradient;
            return (
              <div key={`${feature.title}-${index}`} className="group">
                <div className="relative bg-card rounded-2xl p-8 shadow-elegant hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>

                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                {t("title")}
              </h3>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t("benefitsDescription")}
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div
                      className="shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <CheckCircle
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-linear-to-br from-primary/10 to-secondary/30 rounded-2xl p-8 text-center">
                <div
                  className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-2xl"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 mx-auto"
                    aria-hidden="true"
                  >
                    <Heart
                      className="h-10 w-10 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  <h4 className="font-display text-xl font-bold text-foreground mb-2">
                    {t("experienceTitle")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("experienceDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
