import { SVGProps } from 'react'

const AniPayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.987 24.979c2.498 0 4.817-.764 6.738-2.07a2.4 2.4 0 0 1 .65-4.709h2.192a2.4 2.4 0 0 1 2.29-3.492c.08-.562.122-1.137.122-1.722 0-6.622-5.37-11.991-11.992-11.991C6.364.995.995 6.364.995 12.987c0 6.623 5.369 11.992 11.992 11.992Zm3.953-12.574-5.258 6.675c-.399.515-1.054.182-.82-.445l1.633-4.362H9.31c-.252 0-.433-.176-.433-.416 0-.135.053-.252.152-.38L14.287 6.8c.398-.51 1.054-.181.82.445l-1.634 4.362h3.186c.252 0 .433.176.433.416 0 .135-.053.252-.152.38Z"
      fill="#fff"
    />
    <path
      d="M27.371 21.398a.8.8 0 0 0 0-1.599v1.6ZM20.374 19.8a.8.8 0 0 0 0 1.6v-1.6Zm6.997 0h-6.997v1.6h6.997v-1.6Z"
      fill="#fff"
    />
    <path
      d="m24.7 17.101 3.498 3.499-3.498 3.498"
      stroke="#fff"
      strokeWidth={1.599}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default AniPayIcon
