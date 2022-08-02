import { SVGBox, SVGIconProps } from "src/components";

export function CarbonConcept({ boxSize, ...props }: SVGIconProps) {
  return (
    <SVGBox viewBox="0 0 32 32" boxSize={boxSize} {...props}>
      <path
        fill="currentColor"
        d="M20.885 19.471a5.96 5.96 0 0 0 0-6.942L23 10.414l1.293 1.293a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414L21.586 9l-2.115 2.115a5.96 5.96 0 0 0-6.942 0L10 8.585V2H2v8h6.586l2.529 2.529a5.96 5.96 0 0 0 0 6.942L9 21.586l-1.293-1.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414L10.414 23l2.115-2.115a5.96 5.96 0 0 0 6.942 0L22 23.415V30h8v-8h-6.586ZM25 4.414L27.586 7L25 9.586L22.414 7ZM7 27.586L4.414 25L7 22.414L9.586 25ZM8 8H4V4h4Zm4 8a4 4 0 1 1 4 4a4.005 4.005 0 0 1-4-4Zm12 8h4v4h-4Z"
      />
    </SVGBox>
  );
}
