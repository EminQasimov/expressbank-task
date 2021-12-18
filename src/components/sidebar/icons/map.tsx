import { SVGProps } from 'react'

const HistoryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 24.5c1.5 0 10.5-6 10.5-13.375C21.5 5.257 16.799.5 11 .5 5.2.5.5 5.257.5 11.125.5 18.5 9.5 24.5 11 24.5Zm0-9.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      fill="#fff"
    />
  </svg>
)

export default HistoryIcon
