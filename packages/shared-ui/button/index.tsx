import React from "react";
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  View,
} from "react-native";
import { Text, TextVariants } from "../text";

import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "h-12 px-6 py-3 rounded-[40px] justify-center items-center inline-flex",
  {
    variants: {
      variant: {
        primary: ["bg-[#802eff]", "text-white font-weight-[600]"],
        gray: [
          "bg-gray-200 focus:outline-gray-200 active:bg-gray-300",
          "text-gray-900",
        ],
        error: [
          "bg-red-700 focus:outline-error-600 active:bg-error-700",
          "text-white",
        ],
        "link-color": ["", "text-brand-700"],
        success: [
          "bg-green-700 focus:outline-success-600 active:bg-success-700",
          "text-white",
        ],
      },
      disabled: {
        true: [
          "bg-gray-300 focus:outline-gray-200 active:bg-gray-300",
          "text-gray-400",
        ],
      },
      size: {
        sm: ["px-3 py-2 gap-1"],
        lg: ["px-6 py-3 gap-1.5"],
        xl: ["px-1.25 py-0.75 rounded-[80px]"],
        "2xl": ["rounded-lg px-1.5 py-1"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
      disabled: false,
    },
    compoundVariants: [
      {
        variant: "primary",
        disabled: true,
        className:
          "bg-gray-300 focus:outline-gray-200 active:bg-gray-300 text-gray-400",
      },
    ],
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
interface ButtonProps
  extends ButtonVariants,
    Omit<RNPressableProps, "disabled"> {
  label?: string | null;
  className?: string;
  disabled?: boolean;
  textClassName?: string;
  textVariant?: TextVariants["variant"];
  textFontFamily?: TextVariants["fontFamily"];
  textDecoration?: TextVariants["decoration"];
  icon?: React.ReactNode;
  iconLeft?: boolean;
}

export const Button = React.forwardRef<
  React.ElementRef<typeof RNPressable>,
  ButtonProps
>(
  (
    {
      label: text,
      variant = "primary",
      size = "lg",
      className = "",
      testID,
      disabled = false,
      textClassName = "",
      textVariant = "md",
      textFontFamily = "semibold",
      textDecoration = "no-underline",
      icon,
      iconLeft = false,
      ...props
    },
    ref,
  ) => {
    const styles = buttonVariants({ variant, size, disabled });

    return (
      <RNPressable
        disabled={disabled}
        className={`${styles} ${className}`}
        {...props}
        ref={ref}
        testID={testID}
      >
        {props.children ? (
          props.children
        ) : (
          <>
            <View
              className={`${
                iconLeft ? "flex-row-reverse" : "flex-row"
              } items-center gap-0.5`}
            >
              <Text
                variant={textVariant}
                fontFamily={textFontFamily}
                decoration={textDecoration}
                testID={testID ? `${testID}-label` : undefined}
                className={textClassName}
              >
                {text}
              </Text>
              {icon}
            </View>
          </>
        )}
      </RNPressable>
    );
  },
);

Button.displayName = "Button";
