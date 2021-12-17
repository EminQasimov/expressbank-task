import type { SVGProps } from 'react'

export default function IconoirUser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g strokeWidth="1.5" fill="none">
        <path
          d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </g>
    </svg>
  )
}
