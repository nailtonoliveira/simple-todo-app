import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Cookies from "js-cookie";

import messages from "../../messages/en.json";

interface Props {
  children: ReactNode;
}

export default function RootWithNextIntlMock({ children }: Props) {
  Cookies.set("NEXT_LOCALE", "en");

  return (
    <NextIntlClientProvider messages={messages} locale="en">
      {children}
    </NextIntlClientProvider>
  );
}
