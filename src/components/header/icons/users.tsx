import { SVGProps } from 'react'

const UsersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M18.395 12.614c2.88.417 6.605 1.763 6.605 4.038v0a3.13 3.13 0 0 1-3.13 3.13h-3.132"
      stroke="#F58220"
      strokeLinecap="round"
    />
    <path
      d="M9.348 9.348a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z"
      stroke="#474C54"
    />
    <path
      d="M15.264 1.25A4.36 4.36 0 0 1 16.652 1a4.173 4.173 0 0 1 4.174 4.174 4.173 4.173 0 0 1-4.174 4.174c-.49 0-.95-.105-1.388-.25"
      stroke="#F58220"
      strokeLinecap="round"
    />
    <path
      clipRule="evenodd"
      d="M9.348 12.478C6.562 12.478 1 13.877 1 16.652a3.13 3.13 0 0 0 3.13 3.13h10.435a3.13 3.13 0 0 0 3.13-3.13c0-2.776-5.561-4.174-8.347-4.174Z"
      stroke="#474C54"
    />
  </svg>
)

export default UsersIcon
