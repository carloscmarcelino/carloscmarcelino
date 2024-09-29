import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRight3 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      stroke={props?.stroke ?? '#FFF'}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.333 8H2.667M10 11.333S13.333 8.878 13.333 8 10 4.667 10 4.667"
    />
  </svg>
);
export default SvgArrowRight3;
