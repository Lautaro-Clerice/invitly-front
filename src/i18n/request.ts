import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as string)) {
    locale = routing.defaultLocale;
  }

  const messages = {
    ...(await import(`../../messages/${locale}/index.json`)).default,
    ...(await import(`../../messages/${locale}/home.json`)).default,
    ...(await import(`../../messages/${locale}/templates.json`)).default,
    ...(await import(`../../messages/${locale}/contact.json`)).default,
  };

  return {
    locale,
    messages,
  };
});
