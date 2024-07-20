export const locales = ["en", "pt"] as const;
export const defaultLocale: Locale = "en";

export type Locale = (typeof locales)[number];
