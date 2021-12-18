import { SVGProps } from 'react'

const DotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={5}
    height={4}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <circle cx={2.199} cy={2} r={2} fill="#9696AA" />
  </svg>
)

export default DotIcon
