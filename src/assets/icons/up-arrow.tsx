import { SVGProps } from 'react'

const UpArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={11}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      stroke="#73B67A"
      strokeWidth={2}
      strokeLinecap="round"
      d="M5.461 3v6"
    />
    <path
      d="M9.627 5.771 5.513 1.657 1.398 5.771"
      stroke="#73B67A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default UpArrow
