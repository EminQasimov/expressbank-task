import { SVGProps } from 'react'

const EnvelopeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2.954 4.159h17.955a2 2 0 0 1 2 2V17.84a2 2 0 0 1-2 2H2.954a2 2 0 0 1-2-2V6.159a2 2 0 0 1 2-2Z"
      stroke="#474C54"
      strokeLinecap="round"
    />
    <path
      d="m19.248 7.818-4.829 4.83c-1.006 1.006-1.51 1.51-2.114 1.625a2.001 2.001 0 0 1-.75 0c-.604-.116-1.107-.62-2.114-1.626L4.612 7.818m.001 8.364 4.182-4.181m10.454 4.181-4.181-4.181"
      stroke="#F58220"
      strokeLinecap="round"
    />
  </svg>
)

export default EnvelopeIcon
