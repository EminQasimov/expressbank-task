import { SVGProps } from 'react'

const TemplatesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect width={3.143} height={3.143} rx={1.571} fill="#fff" />
    <rect x={5.239} width={16.762} height={3.143} rx={1.571} fill="#fff" />
    <rect y={5.238} width={3.143} height={3.143} rx={1.571} fill="#fff" />
    <rect
      x={5.239}
      y={5.238}
      width={16.762}
      height={3.143}
      rx={1.571}
      fill="#fff"
    />
    <rect y={10.476} width={3.143} height={3.143} rx={1.571} fill="#fff" />
    <rect
      x={5.239}
      y={10.476}
      width={16.762}
      height={3.143}
      rx={1.571}
      fill="#fff"
    />
  </svg>
)

export default TemplatesIcon
