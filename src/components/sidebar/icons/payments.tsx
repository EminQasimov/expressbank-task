import { SVGProps } from 'react'

const PaymentsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      d="M19 5.129h-9"
    />
    <path
      d="m16.6 9.53 4.265-4.265L16.6 1"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      transform="matrix(1 0 .00573 .99998 1.865 13.4)"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      d="M1-1h9"
    />
    <path
      d="M5.265 8 1 12.265l4.265 4.264"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default PaymentsIcon
