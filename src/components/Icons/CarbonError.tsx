import { SVGBox, SVGIconProps } from "src/components";

export function CarbonError({ boxSize, ...props }: SVGIconProps) {
  return (
    <SVGBox viewBox="0 0 32 32" boxSize={boxSize} {...props}>
      <path
        fill="currentColor"
        d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16Zm23.15 7.75L8.25 6.85a12 12 0 0 1 16.9 16.9ZM8.24 25.16a12 12 0 0 1-1.4-16.89l16.89 16.89a12 12 0 0 1-15.49 0Z"
      />
    </SVGBox>
  );
}
