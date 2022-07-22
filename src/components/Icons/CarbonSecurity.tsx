import React, { SVGProps } from "react";

// https://icones.js.org/collection/carbon?s=arrow

export function CarbonSecurity(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14 16.59L11.41 14L10 15.41l4 4l8-8L20.59 10L14 16.59z"
      />
      <path
        fill="currentColor"
        d="m16 30l-6.176-3.293A10.982 10.982 0 0 1 4 17V4a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v13a10.982 10.982 0 0 1-5.824 9.707ZM6 4v13a8.985 8.985 0 0 0 4.766 7.942L16 27.733l5.234-2.79A8.985 8.985 0 0 0 26 17V4Z"
      />
    </svg>
  );
}