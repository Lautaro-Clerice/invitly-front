import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const LOCALES = ["en", "es"];
export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: "es",
});

export function stripLocaleFromPath(path: string) {
  const regex = new RegExp(`^/(${LOCALES.join("|")})(/|$)`);
  return path.replace(regex, "/");
}

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
