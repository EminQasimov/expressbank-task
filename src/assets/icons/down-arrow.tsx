import { SVGProps } from 'react'

const DownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={11}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      stroke="#D74862"
      strokeWidth={2}
      strokeLinecap="round"
      d="M5.336 7.657v-6"
    />
    <path
      d="M1.17 4.886 5.284 9l4.114-4.114"
      stroke="#D74862"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default DownArrow
