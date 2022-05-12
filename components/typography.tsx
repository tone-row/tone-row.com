import { forwardRef } from "react";
import { Type, TypeProps } from "../slang";

export const Small = forwardRef(function Small(
  { as = "span", size = -2, ...props }: TypeProps,
  ref
) {
  return <Type as={as} size={size} {...props} ref={ref} />;
});
export const Medium = forwardRef(function Medium(
  { as = "span", size = 0, ...props }: TypeProps,
  ref
) {
  return <Type as={as} size={size} {...props} ref={ref} />;
});
export const Large = forwardRef(function Large(
  { as = "span", size = 2, ...props }: TypeProps,
  ref
) {
  return <Type as={as} size={size} {...props} ref={ref} />;
});
export const WideLarge = forwardRef(function WideLarge(
  { as = "span", size = 2, ...props }: TypeProps,
  ref
) {
  return <Type as={as} size={size} {...props} ref={ref} />;
});
export const Extralarge = forwardRef(function Extralarge(
  { as = "span", size = 7, ...props }: TypeProps,
  ref
) {
  return <Type as={as} size={size} {...props} ref={ref} />;
});
