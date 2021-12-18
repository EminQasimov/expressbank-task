import { SVGProps } from 'react'

const HistoryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0Zm4.756 13.092h-4.664c-.015 0-.03-.004-.046-.004-.015 0-.03.004-.046.004a.76.76 0 0 1-.76-.76V4.564a.76.76 0 1 1 1.521 0v7.006h3.995a.76.76 0 0 1 0 1.521Z"
      fill="#fff"
    />
  </svg>
)

export default HistoryIcon
