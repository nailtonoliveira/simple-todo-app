import { useTranslations } from "next-intl";

import { Input, Label, Textarea } from "@/components";

export default function Home() {
  const t = useTranslations("TodoPage");

  return (
    <div className="max-w-screen-sm mx-auto p-4 flex flex-col gap-4">
      <form className="flex flex-col gap-4 border rounded-md p-4 border-zinc-900">
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
            rows={3}
          />
        </div>

        <button className="self-end text-sm font-bold leading-6 uppercase grow-0 basis-auto border-0 py-1.5 px-6 bg-orange-500 rounded-md text-white hover:bg-orange-700 transition-colors ease-in-out duration-300">
          Add
        </button>
      </form>

      <div className="bg-zinc-900 px-4 rounded-md">
        <p className="w-full text-center px-4 py-8 font-semibold">
          {t("emptyList")}
        </p>

        <ul data-testid="todo-list">
          <li className="flex items-center justify-between gap-4 py-3 [&:not(:first-child)]:border-t border-gray-700">
            <span>Make coffee 03:00 PM</span>

            <button className="text-sm font-bold leading-6 uppercase border-0 py-1.5 px-2 bg-gray-400 rounded-md text-gray-900 hover:bg-gray-300 transition-colors ease-in-out duration-300">
              {t("TodoItems.deleteBtnLabel")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
