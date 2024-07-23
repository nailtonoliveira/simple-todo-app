import React from "react";

type Variants = "heading-1" | "heading-2" | "heading-3" | "body" | "overline";

type AvailableElements = Extract<
  React.ElementType,
  "h1" | "h3" | "h5" | "p" | "span"
>;

type AsProp<C extends AvailableElements> = {
  as?: C;
};

type PropsToOmit<C extends AvailableElements, P> = keyof (AsProp<C> & P);

type PolimorphicComponentProp<
  C extends AvailableElements,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type TypoProps = {
  variant: Variants;
};

type TypoConfiguration = {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
};

const typoConfigurationMap: Record<Variants, TypoConfiguration> = {
  "heading-1": {
    fontSize: "text-2xl",
    lineHeight: "leading-9",
    fontWeight: "font-bold",
  },
  "heading-2": {
    fontSize: "text-xl",
    lineHeight: "leading-8",
    fontWeight: "font-bold",
  },
  "heading-3": {
    fontSize: "text-lg",
    lineHeight: "leading-7",
    fontWeight: "font-semibold",
  },
  body: {
    fontSize: "text-base",
    lineHeight: "leading-6",
    fontWeight: "font-normal",
  },
  overline: {
    fontSize: "text-xs",
    lineHeight: "leading-4",
    fontWeight: "font-light",
  },
};

export default function Typo<C extends AvailableElements = "p">({
  as,
  variant,
  className,
  ...props
}: PolimorphicComponentProp<C, TypoProps>) {
  const config = typoConfigurationMap[variant];

  const Component = as || "p";

  const classes = [config.fontSize, config.lineHeight, config.fontWeight];

  return <Component className={[...classes, className].join(" ")} {...props} />;
}
