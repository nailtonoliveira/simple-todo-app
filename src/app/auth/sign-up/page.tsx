import { Button, Input, Label, Typo } from "@/components";
import { useTranslations } from "next-intl";

export default function SignUp() {
  const t = useTranslations("Auth.SignUp");

  return (
    <>
      <Typo variant="heading-1" className="text-center">
        {t("pageTitle")}
      </Typo>

      <form action="" className="flex flex-col gap-4">
        <div>
          <Label>{t("Form.emailFieldLabel")}</Label>
          <Input className="w-full mt-2" />
        </div>

        <div>
          <Label>{t("Form.passwordFieldLabel")}</Label>
          <Input className="w-full mt-2" />
        </div>

        <Button className="mt-4">{t("Form.submitButtonLabel")}</Button>
      </form>

      <Button color="neutral">{t("signinButtonLabel")}</Button>
    </>
  );
}
