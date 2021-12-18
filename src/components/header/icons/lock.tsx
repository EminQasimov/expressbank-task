import { SVGProps } from 'react'

const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect
      x={0.5}
      y={9.625}
      width={20.083}
      height={13.375}
      rx={1.5}
      stroke="#474C54"
      strokeLinejoin="round"
    />
    <path
      d="M17.25 9.125V7.208a6.708 6.708 0 0 0-13.417 0v1.917"
      stroke="#474C54"
    />
    <path d="M14 9.5V7a3.5 3.5 0 1 0-7 0v2.5" stroke="#474C54" />
    <path
      d="M8.625 14.63a1.953 1.953 0 0 1 3.905 0c0 .516-.202.981-.53 1.329-.243.257-.447.571-.45.925l-.01 2.091a.976.976 0 1 1-1.952-.01l.01-2.074c.002-.358-.203-.676-.448-.937a1.925 1.925 0 0 1-.525-1.324Z"
      stroke="#F58220"
    />
  </svg>
)

export default LockIcon
