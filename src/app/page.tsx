import { useTranslations } from "next-intl";

import { Button, Card, Input, Label, Textarea, Typo } from "@/components";

export default function Home() {
  const t = useTranslations("TodoPage");

  return (
    <div className="max-w-screen-sm mx-auto p-4 flex flex-col gap-4">
      <Card>
        <form className="flex flex-col gap-4 p-4">
          <Typo as="h5" variant="heading-3">
            {t("FormAdd.header")}
          </Typo>

          <div>
            <Label htmlFor="addTodoTitleField">
              {t("FormAdd.titleFieldLabel")}
            </Label>

            <Input
              id="addTodoTitleField"
              className="w-full mt-1"
              placeholder={t("FormAdd.titleFieldPlaceholder")}
              type="text"
            />
          </div>

          <div>
            <Label htmlFor="addTodoDescriptionField">
              {t("FormAdd.descriptionFieldLabel")}
            </Label>

            <Textarea
              id="addTodoDescriptionField"
              className="w-full mt-1"
              placeholder={t("FormAdd.descriptionFieldPlaceholder")}
              rows={2}
            />
          </div>

          <Button className="self-end">{t("FormAdd.submitButtonLabel")}</Button>
        </form>
      </Card>

      <Card className="px-4">
        <Typo variant="body" className="w-full text-center px-4 py-8">
          {t("emptyList")}
        </Typo>

        <ul data-testid="todo-list">
          <li className="flex items-center justify-between gap-4 py-3 [&:not(:first-child)]:border-t border-gray-700">
            <Typo variant="body">Make coffee 03:00 PM</Typo>

            <Button color="neutral">{t("TodoItems.deleteBtnLabel")}</Button>
          </li>
        </ul>
      </Card>
    </div>
  );
}
