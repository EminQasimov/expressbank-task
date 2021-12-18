import { SVGProps } from 'react'

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={7}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M3.5 5.082.524.5h5.952L3.5 5.082Z" stroke="#616173" />
  </svg>
)

export default ArrowIcon
