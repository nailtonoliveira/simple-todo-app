import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcherSelect from "./LocaleSwitcherSelector";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultLocale={locale}
      items={[
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "pt",
          label: t("pt"),
        },
      ]}
    />
  );
}
