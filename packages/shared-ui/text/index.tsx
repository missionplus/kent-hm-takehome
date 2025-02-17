import type { TextProps } from "react-native";
import { Text as NNText } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";

const text = cva("font-inter self-start text-white", {
  variants: {
    variant: {
      xxs: "text-xxs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      heading: "text-[32px] leading-10",
    },
    fontFamily: {
      regular: "font-regular",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    decoration: {
      "line-through": "line-through",
      overline: "overline", // not supported on mobile
      underline: "underline",
      "no-underline": "",
    },
  },
  defaultVariants: {
    variant: "sm",
    fontFamily: "regular",
    decoration: "no-underline",
  },
});

export type TextVariants = VariantProps<typeof text>;

export interface LabelTextProps extends TextVariants, TextProps {
  className?: string;
}

export const Text = ({
  className = "",
  variant,
  fontFamily = "regular",
  children,
  decoration = "no-underline",
  ...props
}: LabelTextProps) => {
  const textStyle = text({ variant, fontFamily, decoration });

  return (
    <NNText className={`${textStyle} ${className}`} {...props} disabled={false}>
      {children}
    </NNText>
  );
};
