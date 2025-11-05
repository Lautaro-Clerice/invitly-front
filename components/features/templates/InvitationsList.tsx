"use client";
import { Template } from "@/utils/types";
import Image from "next/image";
import { InvitationsListSkeleton } from "@/components/shared/skeletons/InvitationsListSkeleton";
import { useTemplates } from "@/hooks/useTemplates";
import { useCategoriesStore } from "@/stores/categoriesStore";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ErrorState } from "@/components/shared/states/ErrorState";
import { EmptyState } from "@/components/shared/states/EmptyState";
import { openWhatsApp } from "@/utils/openWhatsapp";

export function InvitationsList() {
  const t = useTranslations("Templates");
  const selectedCategories = useCategoriesStore((s) => s.selectedCategories);
  const {
    data: invitations = [],
    isLoading,
    error,
    refetch,
  } = useTemplates(selectedCategories);

  if (isLoading) {
    return <InvitationsListSkeleton />;
  }

  if (error) {
    return (
      <ErrorState
        message={t("error")}
        onRetry={() => refetch()}
        retryLabel={t("retry")}
      />
    );
  }

  if (invitations.length === 0) {
    return <EmptyState message={t("noResults")} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
      {invitations.map((invitation: Template) => (
        <div
          key={invitation.id}
          className="group relative overflow-hidden rounded-xl bg-card border shadow-soft hover:shadow-elegant transition-all duration-500 h-full flex flex-col"
        >
          <div className="relative aspect-3/4 overflow-hidden">
            {invitation.preview_url && (
              <Image
                src={invitation.preview_url}
                alt={invitation.display_name}
                width={400}
                height={533}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ aspectRatio: "3/4" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            )}
            <div
              className="absolute w-full left-0 flex gap-2 transition-opacity
                md:inset-0 md:bg-black/60 md:backdrop-blur-sm md:items-center md:justify-center md:opacity-0 md:group-hover:opacity-100
                bottom-0 justify-center py-3 opacity-100 bg-transparent"
            >
              <a
                href="https://invitation-front-chi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-lg"
              >
                <Button variant="secondary" size="sm" className="w-full">
                  {t("viewDemo")}
                </Button>
              </a>
              <Button
                variant="default"
                size="sm"
                className="shadow-lg"
                onClick={() =>
                  openWhatsApp(
                    t("getMessage", { name: invitation.display_name })
                  )
                }
              >
                {t("get")}
              </Button>
            </div>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-semibold text-lg mb-1 min-h-14 leading-tight">
              {invitation.display_name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 truncate">
              {invitation.category?.display_name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
