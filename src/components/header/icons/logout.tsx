import { SVGProps } from 'react'

const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8 9a.5.5 0 0 0 0 1V9Zm11.627 1a.5.5 0 0 0 0-1v1Zm-3.35 2.654a.5.5 0 1 0 .722.692l-.721-.692ZM20 9.5l.36.346a.5.5 0 0 0 0-.692L20 9.5Zm-3-3.846a.5.5 0 1 0-.722.692l.721-.692ZM8 10h11.627V9H8v1Zm9 3.346 3.36-3.5-.72-.692-3.362 3.5.721.692Zm3.36-4.192L17 5.654l-.722.692 3.361 3.5.722-.692Z"
      fill="#F58220"
    />
    <path
      d="M13 4.465V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.465"
      stroke="#474C54"
      strokeLinecap="round"
    />
  </svg>
)

export default LogoutIcon
