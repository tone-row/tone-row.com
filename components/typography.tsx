import { forwardRef } from "react";
import { Type, TypeProps } from "../slang";

export const Small = forwardRef(
  ({ as = "p", size = -1, ...props }: TypeProps, ref) => (
    <Type as={as} size={size} {...props} ref={ref} />
  )
);
export const Medium = forwardRef(
  ({ as = "p", size = 0, ...props }: TypeProps, ref) => (
    <Type as={as} size={size} {...props} ref={ref} />
  )
);
export const Large = forwardRef(
  ({ as = "p", size = 2, ...props }: TypeProps, ref) => (
    <Type as={as} size={size} {...props} ref={ref} />
  )
);
export const WideLarge = forwardRef(
  ({ as = "p", size = 2, ...props }: TypeProps, ref) => (
    <Type as={as} size={size} {...props} ref={ref} />
  )
);
export const Extralarge = forwardRef(
  ({ as = "p", size = 4, ...props }: TypeProps, ref) => (
    <Type as={as} size={size} {...props} ref={ref} />
  )
);
