import { Container } from "@/components/shared/Container";
import { TemplatesHeader } from "@/components/features/templates/TemplatesHeader";
import { InvitationsList } from "@/components/features/templates/InvitationsList";
import { CategorySelect } from "@/components/features/templates/CategorySelect";
import { getTranslations } from "next-intl/server";

export default async function Templates() {
  const t = await getTranslations("Templates");
  return (
    <section className="py-20 from-secondary to-background" role="main">
      <Container>
        <TemplatesHeader
          title={t("featuredInvitations")}
          description={t("featuredDescription")}
        />
        <CategorySelect />
        <InvitationsList />
      </Container>
    </section>
  );
}
