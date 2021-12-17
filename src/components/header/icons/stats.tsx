import { SVGProps } from 'react'

const StatsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect
      x={0.5}
      y={14}
      width={4}
      height={9}
      rx={0.5}
      stroke="#474C54"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={8.5}
      y={12}
      width={4}
      height={11}
      rx={0.5}
      stroke="#474C54"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={16.5}
      y={10}
      width={4}
      height={13}
      rx={0.5}
      stroke="#474C54"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m.5 8.5 5.215-3.631A1 1 0 0 1 6.8 4.83l3.933 2.347a1 1 0 0 0 1.064-.025L20.334 1.5"
      stroke="#F58220"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m16.17.5 4.33.71-.704 4.365"
      stroke="#F58220"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default StatsIcon
