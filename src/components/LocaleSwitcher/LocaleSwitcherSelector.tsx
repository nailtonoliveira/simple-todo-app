"use client";

import { useTransition } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LanguageIcon, CheckIcon } from "@heroicons/react/24/outline";

import { Locale } from "@/locale.config";
import { setUserLocale } from "@/services/locale";
import Button from "../Button/Button";
import Typo from "../Typo/Typo";

interface Props {
  defaultLocale: string;
  items: Array<{ value: string; label: string }>;
}

export default function LocaleSwitcherSelect({ defaultLocale, items }: Props) {
  const [isPending, startTransition] = useTransition();

  const onChange = (value: string) => {
    const locale = value as Locale;

    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <Menu as="div">
      <div>
        <MenuButton color="neutral" as={Button} disabled={isPending}>
          <LanguageIcon className="size-6" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {items.map((locale) => (
            <MenuItem key={locale.value}>
              <div
                onClick={() => onChange(locale.value)}
                className="flex items-center pl-2 pr-4 py-2 data-[focus]:bg-zinc-900 cursor-pointer"
              >
                <CheckIcon
                  className={`size-4 mr-2 ${
                    locale.value === defaultLocale ? "visible" : "invisible"
                  }`}
                />

                <Typo variant="body" className="">
                  {locale.label}
                </Typo>
              </div>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
