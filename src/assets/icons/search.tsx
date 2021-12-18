import { SVGProps } from 'react'

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M11.092 8.322c-.08 2.185-1.943 4.102-4.24 4.202-2.298.1-4.024-1.662-3.944-3.846.08-2.185 1.943-4.102 4.24-4.202 2.298-.1 4.024 1.662 3.944 3.846Z"
      stroke="#616173"
      strokeWidth={1.5}
    />
    <path
      fill="#616173"
      d="m9.121 12.13 1.494-1.509 4.163 4.148-1.494 1.509z"
    />
  </svg>
)

export default SearchIcon
