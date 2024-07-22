import { useTranslations } from "next-intl";

import { Button, Card, Input, Label, Textarea } from "@/components";

export default function Home() {
  const t = useTranslations("TodoPage");

  return (
    <div className="max-w-screen-sm mx-auto p-4 flex flex-col gap-4">
      <Card>
        <form className="flex flex-col gap-4 p-4">
          <h4 className="text-lg font-semibold">{t("FormAdd.header")}</h4>

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

          <Button className="self-end">Add</Button>
        </form>
      </Card>

      <Card className="px-4">
        <p className="w-full text-center px-4 py-8 font-semibold">
          {t("emptyList")}
        </p>

        <ul data-testid="todo-list">
          <li className="flex items-center justify-between gap-4 py-3 [&:not(:first-child)]:border-t border-gray-700">
            <span>Make coffee 03:00 PM</span>

            <Button color="neutral">{t("TodoItems.deleteBtnLabel")}</Button>
          </li>
        </ul>
      </Card>
    </div>
  );
}
